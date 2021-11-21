import { DomainEvent } from '@domeniere/event';
import { Api } from '@domeniere/core';
import { EmailAddress } from '@swindle/core';
import { BlogIdData, BlogPostData, BlogsRepository, SearchTextData } from './blog/blog.module';
import { EmailMessageData, SendEmailMessageCommand, SendGoodbyeMessageCommand, SendWelcomeMessageCommand } from './communication/communication.module';
import { ContentEventStore } from './content.eventstore';
import { ProjectIdData } from './project/data/project-id.data';
import { ProjectData, ProjectsRepository, TechnologyData } from './project/project.module';
import { SubscriberCreated, SubscriberDeleted, SubscriberRepository, SubscriberRequestData } from './subscriber/subscriber.module';
import { HandleErrorEventsCommand } from './utilities/utilities.module';
/**
 * ContentApi
 *
 * The content api.
 */
export declare class ContentApi extends Api {
    constructor(blogRepository: BlogsRepository, projectRepository: ProjectsRepository, subscriberRepository: SubscriberRepository, sendWelcomeMessage: SendWelcomeMessageCommand, sendGoodbyeMessage: SendGoodbyeMessageCommand, sendEmailMessage: SendEmailMessageCommand, handleErrors: HandleErrorEventsCommand, eventStore: ContentEventStore);
    /**
     * createSubscriber()
     *
     * creates a subscriber.
     * @param email the email address to subscribe with.
     * @throws EmailAlreadyInUseException when the email is already in use.
     * @throws SubscriberRepositoryException when there is a problem with the subscriber repository.
     */
    createSubscriber(request: SubscriberRequestData): Promise<void>;
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
    getBlogPostById(id: BlogIdData): Promise<BlogPostData>;
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
    getLatestBlogs(count?: number, start?: number): Promise<BlogPostData[]>;
    /**
     * getLatestProjects()
     *
     * gets the latest projects
     * @param count the number of projects to get.
     * @param offset the offset, or number of items to skip.
     * @returns the latest projects.
     * @throws ProjectNotFoundException when there are no projects to be retrieved
     * @throws ProjectsRepositoryException when there is a problem with the repository.
     */
    getLatestProjects(count?: number, offset?: number): Promise<ProjectData[]>;
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
    getProjectById(id: ProjectIdData): Promise<ProjectData>;
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
    getProjectsByTechnology(technology: TechnologyData): Promise<ProjectData[]>;
    /**
     * removeSubscriber()
     *
     * removes a subscriber.
     * @param email the email address to remove.
     * @throws SubscriberNotFoundException when the subscriber cannot be found.
     * @throws SubscriberRepositoryException when there is a problem with the subscriber repository.
     */
    removeSubscriber(email: EmailAddress): Promise<void>;
    /**
     * sendEmailMessage()
     *
     * sends an email message.
     * @param message the message to sent.
     * @throws MessageSenderNameException when the message sender name is invlid.
     * @throws MessageSubjectException when the message subject is invalid.
     * @throws MessageContentException when the message content is invalid.
     * @thros FailedToSendMessageException when the message could not be sent.
     */
    sendEmailMessage(message: EmailMessageData): Promise<void>;
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
    searchBlogs(query: SearchTextData, count?: number, start?: number): Promise<BlogPostData[]>;
    handleErrors(event: DomainEvent): Promise<void>;
    sendGoodbyeMessage(event: SubscriberDeleted): Promise<void>;
    sendWelcomeMessage(event: SubscriberCreated): Promise<void>;
}
//# sourceMappingURL=content.api.d.ts.map