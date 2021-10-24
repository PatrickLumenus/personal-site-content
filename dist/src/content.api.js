"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentApi = void 0;
const common_1 = require("@domeniere/common");
const event_1 = require("@domeniere/event");
const core_1 = require("@domeniere/core");
const event_2 = require("@domeniere/event");
const blog_module_1 = __importStar(require("./blog/blog.module"));
const communication_module_1 = __importStar(require("./communication/communication.module"));
const project_module_1 = __importStar(require("./project/project.module"));
const get_projects_by_technology_query_1 = require("./project/services/get-projects-by-technology.query");
const subscriber_module_1 = __importStar(require("./subscriber/subscriber.module"));
const utilities_module_1 = __importStar(require("./utilities/utilities.module"));
/**
 * ContentApi
 *
 * The content api.
 */
class ContentApi extends core_1.Api {
    constructor(blogRepository, projectRepository, subscriberRepository, sendWelcomeMessage, sendGoodbyeMessage, sendEmailMessage, handleErrors, eventStore) {
        super('content', eventStore);
        // Blog module.
        const blogModule = new blog_module_1.default();
        blogModule.registerRepositoryInstance(blog_module_1.BlogsRepository, blogRepository);
        this.registerModule(blogModule);
        // Project module
        const projectModule = new project_module_1.default();
        projectModule.registerRepositoryInstance(project_module_1.ProjectsRepository, projectRepository);
        this.registerModule(projectModule);
        // subscriber module
        const subscriberModule = new subscriber_module_1.default();
        subscriberModule.registerRepositoryInstance(subscriber_module_1.SubscriberRepository, subscriberRepository);
        this.registerModule(subscriberModule);
        // communication module
        const communicationModule = new communication_module_1.default();
        communicationModule.registerServiceInstance(communication_module_1.SendWelcomeMessageCommand, sendWelcomeMessage);
        communicationModule.registerServiceInstance(communication_module_1.SendGoodbyeMessageCommand, sendGoodbyeMessage);
        communicationModule.registerServiceInstance(communication_module_1.SendEmailMessageCommand, sendEmailMessage);
        this.registerModule(communicationModule);
        // utilities module
        const utilitiesModule = new utilities_module_1.default();
        utilitiesModule.registerServiceInstance(utilities_module_1.HandleErrorEventsCommand, handleErrors);
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
    async createSubscriber(request) {
        const req = new subscriber_module_1.SubscriberRequest(request.name, request.email);
        await this.domain.module('subscriber')
            .get(subscriber_module_1.CreateSubscriberCommand)
            .execute(req);
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
    async getBlogPostById(id) {
        const post = await this.domain.module('blog')
            .get(blog_module_1.GetBlogPostByIdQuery)
            .execute(new blog_module_1.BlogId(id.value));
        return this.domain.module('blog')
            .get(blog_module_1.BlogDataFactory)
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
    async getLatestBlogs(count = 10, start = 0) {
        const results = await this.domain.module('blog')
            .get(blog_module_1.GetLatestBlogPostsQuery)
            .execute(count, start);
        const factory = this.domain.module('blog').get(blog_module_1.BlogDataFactory);
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
    async getLatestProjects(count = 3) {
        const projects = await this.domain.module('project')
            .get(project_module_1.GetLatestProjectsQuery)
            .execute(count);
        console.log('Back to framework.');
        const factory = this.domain.module('project').get(project_module_1.ProjectDataFactory);
        const data = projects.map(project => factory.createFromObject(project));
        console.log('Exiting framework');
        return data;
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
    async getProjectById(id) {
        const project = await this.domain.module('project')
            .get(project_module_1.GetProjectByIdQuery)
            .execute(new project_module_1.ProjectId(id.id));
        return this.domain.module('project')
            .get(project_module_1.ProjectDataFactory)
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
    async getProjectsByTechnology(technology) {
        const projects = await this.domain.module('project')
            .get(get_projects_by_technology_query_1.GetProjectsByTechnologyQuery)
            .execute(new project_module_1.Technology(technology.technology));
        const factory = this.domain.module('project').get(project_module_1.ProjectDataFactory);
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
    async removeSubscriber(email) {
        await this.domain.module('subscriber')
            .get(subscriber_module_1.RemoveSubscriberCommand)
            .execute(email);
    }
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
    async sendEmailMessage(message) {
        const msg = this.domain.module('communication')
            .get(communication_module_1.EmailMessageFactory)
            .createFromData(message);
        await this.domain.module('communication')
            .get(communication_module_1.SendEmailMessageCommand)
            .execute(msg);
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
    async searchBlogs(query, count = 10, start = 0) {
        const results = await this.domain.module('blog')
            .get(blog_module_1.SearchBlogPostsQuery)
            .execute(query.content, count, start);
        const factory = this.domain.module('blog').get(blog_module_1.BlogDataFactory);
        return results.map(post => factory.createFromObject(post));
    }
    // event handlers
    async handleErrors(event) {
        await this.domain.module('utilities')
            .get(utilities_module_1.HandleErrorEventsCommand)
            .execute(event);
    }
    async sendGoodbyeMessage(event) {
        // send the goodbye message
        await this.domain.module('communication')
            .get(communication_module_1.SendGoodbyeMessageCommand)
            .execute(event.subscriber().name().name(), event.subscriber().email());
    }
    async sendWelcomeMessage(event) {
        // send welcome email.
        await this.domain.module('communication')
            .get(communication_module_1.SendWelcomeMessageCommand)
            .execute(event.subscriber().name().name(), event.subscriber().email());
    }
}
__decorate([
    (0, common_1.OnError)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [event_1.DomainEvent]),
    __metadata("design:returntype", Promise)
], ContentApi.prototype, "handleErrors", null);
__decorate([
    (0, common_1.On)(subscriber_module_1.SubscriberDeleted, event_2.DomainEventHandlerPriority.MEDIUM, "send-goodbye-message"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subscriber_module_1.SubscriberDeleted]),
    __metadata("design:returntype", Promise)
], ContentApi.prototype, "sendGoodbyeMessage", null);
__decorate([
    (0, common_1.On)(subscriber_module_1.SubscriberCreated, event_2.DomainEventHandlerPriority.MEDIUM, "send-welcome-message"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subscriber_module_1.SubscriberCreated]),
    __metadata("design:returntype", Promise)
], ContentApi.prototype, "sendWelcomeMessage", null);
exports.ContentApi = ContentApi;
