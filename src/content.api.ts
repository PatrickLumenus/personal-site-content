import { On, OnError } from '@domeniere/common';
import { DomainEvent } from '@domeniere/event';
import { Api } from '@domeniere/core';
import { 
    DomainEventHandlerPriority,
    EventHandlerFailed
} from '@domeniere/event';
import { EmailAddress } from '@swindle/core';
import BlogModule, { 
    BlogDataFactory,
    BlogId,
    BlogIdData,
    BlogPostData, 
    BlogsRepository, 
    GetBlogPostByIdQuery, 
    GetLatestBlogPostsQuery,
    SearchBlogPostsQuery,
    SearchTextData
} from './blog/blog.module';
import CommunicationModule, { 
    SendGoodbyeMessageCommand,
    SendWelcomeMessageCommand, 
} from './communication/communication.module';
import { ContentEventStore } from './content.eventstore';
import { ProjectIdData } from './project/data/project-id.data';
import ProjectModule, { 
    GetLatestProjectsQuery, 
    GetProjectByIdQuery, 
    ProjectData, 
    ProjectDataFactory, 
    ProjectId, 
    ProjectsRepository, 
    Technology, 
    TechnologyData
} from './project/project.module';
import { GetProjectsByTechnologyQuery } from './project/services/get-projects-by-technology.query';
import SubscriberModule, { 
    CreateSubscriberCommand,
    RemoveSubscriberCommand,
    SubscriberCreated,
    SubscriberDeleted,
    SubscriberRepository,
    SubscriberRequest, 
} from './subscriber/subscriber.module';
import UtilitiesModule, { 
    HandleErrorEventsCommand 
} from './utilities/utilities.module';

/**
 * ContentApi
 * 
 * The content api.
 */

export class ContentApi extends Api {

    constructor(
        blogRepository: BlogsRepository,
        projectRepository: ProjectsRepository,
        subscriberRepository: SubscriberRepository,
        sendWelcomeMessage: SendWelcomeMessageCommand,
        sendGoodbyeMessage: SendGoodbyeMessageCommand,
        handleErrors: HandleErrorEventsCommand,
        eventStore: ContentEventStore
    ) {
        super('content', eventStore);
        
        // Blog module.
        const blogModule = new BlogModule();
        blogModule.registerRepositoryInstance(BlogsRepository, blogRepository);
        this.registerModule(blogModule);

        // Project module
        const projectModule = new ProjectModule();
        projectModule.registerRepositoryInstance(ProjectsRepository, projectRepository);
        this.registerModule(projectModule);

        // subscriber module
        const subscriberModule = new SubscriberModule();
        subscriberModule.registerRepositoryInstance(SubscriberRepository, subscriberRepository);
        this.registerModule(subscriberModule);

        // communication module
        const communicationModule = new CommunicationModule();
        communicationModule.registerServiceInstance(SendWelcomeMessageCommand, sendWelcomeMessage);
        communicationModule.registerServiceInstance(SendGoodbyeMessageCommand, sendGoodbyeMessage);
        this.registerModule(communicationModule);

        // utilities module
        const utilitiesModule = new UtilitiesModule();
        utilitiesModule.registerServiceInstance(HandleErrorEventsCommand, handleErrors);
        this.registerModule(utilitiesModule);
    }

    /**
     * createSubscriber()
     * 
     * creates a subscriber.
     * @param email the email address to subscribe with.
     * @throws EmailAlreadyInUseException when the email is already in use.
     * @throws SubscriberRepositoryException when there is a problem with the subscriber repository.
     */

    public async createSubscriber(email: EmailAddress): Promise<void> {
        const request = new SubscriberRequest(email);
        await this.domain.module('subscriber')
            .get(CreateSubscriberCommand)
            .execute(request);
    }

    /**
     * getBlogPostById()
     * 
     * gets a blog post bhy its id.
     * @param id the id of the blog to search for.
     * @returns the blog post associated with the id.
     * @throws BlogIdException when the blog id is invalid.
     * @throws BlogRepositoryException when there is a problem with the repository.
     * @throws BlogPostNotFoundException when the posts cannot be found.
     */

    public async getBlogPostById(id: BlogIdData): Promise<BlogPostData> {
        const post = await this.domain.module('blog')
            .get(GetBlogPostByIdQuery)
            .execute(new BlogId(id.value));

        return this.domain.module('blog')
            .get(BlogDataFactory)
            .createFromObject(post);
    }

    /**
     * getLatestBlogs()
     * 
     * gets the latest blogs.
     * @param count the number of posts to get.
     * @param start the starting position.
     * @returns the latest posts.
     * @throws BlogPostNotFoundException when there are no blog posts to retrieve.
     * @throws BlogRepositoryException when there is a problem with the repository.
     */

    public async getLatestBlogs(count: number = 10, start: number = 0): Promise<BlogPostData[]> {
        const results = await this.domain.module('blog')
            .get(GetLatestBlogPostsQuery)
            .execute(count, start);
        const factory = this.domain.module('blog').get(BlogDataFactory);
        return results.map(post => factory.createFromObject(post));
    }

    /**
     * getLatestProjects()
     * 
     * gets the latest projects
     * @param count the number of projects to get.
     * @returns the latest projects.
     * @throws ProjectNotFoundException when there are no projects to be retrieved
     * @throws ProjectsRepositoryException when there is a problem with the repository.
     */

    public async getLatestProjects(count: number = 3): Promise<ProjectData[]> {
        const projects = await this.domain.module('project')
            .get(GetLatestProjectsQuery)
            .execute(count);
        const factory = this.domain.module('project').get(ProjectDataFactory);
        return projects.map(project => factory.createFromObject(project));
    }

    /**
     * getProjectById()
     * 
     * gets a project by its id.
     * @param id the id of the project to get.
     * @returns The project associated with the ID.
     * @throws ProjectIdException when the project id is invalid.
     * @throws ProjectNotFoundException when the project is not found.
     * @throws ProjectsRepositoryException when the repository encounters a problem.
     */

    public async getProjectById(id: ProjectIdData): Promise<ProjectData> {
        const project = await this.domain.module('project')
            .get(GetProjectByIdQuery)
            .execute(new ProjectId(id.id));
        return this.domain.module('project')
            .get(ProjectDataFactory)
            .createFromObject(project);
    }

    /**
     * getProjectsByTechnology()
     * 
     * gets projects associated with the specified technology.
     * @param technology the technology to searc for
     * @returns the projects associated with the technology.
     * @throws ProjectTechnologyException when the technology is invalid.
     * @throws ProjectNotFoundException when there is no projects found for that technology.
     * @throws ProjectsRepositoryException when there is a problem with the repository.
     */

    public async getProjectsByTechnology(technology: TechnologyData): Promise<ProjectData[]> {
        const projects = await this.domain.module('project')
            .get(GetProjectsByTechnologyQuery)
            .execute(new Technology(technology.technology));
        const factory = this.domain.module('project').get(ProjectDataFactory);
        return projects.map(project => factory.createFromObject(project));
    }

    /**
     * removeSubscriber()
     * 
     * removes a subscriber.
     * @param email the email address to remove.
     * @throws SubscriberNotFoundException when the subscriber cannot be found.
     * @throws SubscriberRepositoryException when there is a problem with the subscriber repository.
     */

    public async removeSubscriber(email: EmailAddress): Promise<void> {
        await this.domain.module('subscriber')
            .get(RemoveSubscriberCommand)
            .execute(email);
    }

    /**
     * searchBlogs()
     * 
     * searches the blogs.
     * @param query the search query 
     * @param count the number of results to return
     * @param start the starting position.
     * @returns the list of blogs that match the search query.
     * @throws BlogRepositoryException when there is an issue with the blog repository.
     * @throws BlogPostNotFoundException when there are no results for the query.
     */

    public async searchBlogs(query: SearchTextData, count: number = 10, start: number = 0): Promise<BlogPostData[]> {
        const results = await this.domain.module('blog')
            .get(SearchBlogPostsQuery)
            .execute(query.content, count, start);
        const factory = this.domain.module('blog').get(BlogDataFactory);
        return results.map(post => factory.createFromObject(post));
    }

    // event handlers

    @OnError()
    public async handleErrors(event: DomainEvent): Promise<void> {
        await this.domain.module('utilities')
            .get(HandleErrorEventsCommand)
            .execute(event);
    }

    @On(SubscriberDeleted, DomainEventHandlerPriority.MEDIUM, "send-goodbye-message")
    public async sendGoodbyeMessage(event: SubscriberDeleted): Promise<void> {
        // send the goodbye message
        await this.domain.module('communication')
            .get(SendGoodbyeMessageCommand)
            .execute(event.subscriber().email());
    }

    @On(SubscriberCreated, DomainEventHandlerPriority.MEDIUM, "send-welcome-message")
    public async sendWelcomeMessage(event: SubscriberCreated): Promise<void> {
        // send welcome email.
        await this.domain.module('communication')
            .get(SendWelcomeMessageCommand)
            .execute(event.subscriber().email());
    }
}