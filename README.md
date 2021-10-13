# content
The content service for patrickluy.com

# Getting Started
This project is the starting point for a Domeniere Application. To help you get started, be sure to check out the [Domeniere Website](https://www.domeniere.com/) for documentation, tutorials, and more.

# API Synopsis
| Method | Arguments | Return Type | Exceptions | Description |
| --- | ----------- | ----------- | ----------- | ----------- |
| createSubscriber() | (Email) email | void | EmailAlreadyExistsException, SubscribersRepositoryException | Creates a subscriber. |
| getBlogPostById | (BlogIdData) id | BlogPostData | BlogIdException, BlogPostNotFoundException, BlogsRepositoryException | Gets a blog post by its id. |
| getLatestBlogs() | (number) count, (number) offset | BlogPostData[] | BlogPostNotFound, BlogsRepositoryException | Gets the latest blog posts, where count is the number of posts to get and offset is the offset of where to start |
| getLatestProjects() | (number) count, (number) offset | ProjectData[] | ProjectIdException, ProjectNotFoundException | Gets the latest projects, where count is the number of projects to get and offset is the postirion to start. |
| getProjectById() | (ProjectidData) id | ProjectData | ProjectIdException, ProjectNotFoundException, ProjectsRepositoryException | Gets a project by its id. |
| getProjectByTechnology() | (TechnologyData) technology | ProjectData[] | ProjectTechnologyException, ProjectNotFoundException, ProjectsRepositoryException | Gets projects by their technology. |
| removeSubscriber() | (EmailAddress) email | void | SubsceiberNotFoundException, SubscriberRepositoriesException | Removes a subscriber. |
| searchBlogs() | (SearchTextData) query | BlogPostData[] | BlogsRepositoryException, BLogPostNotFoundException | Searches blogs. |

# Event Synopsis
| Event | Description |
| --- | ----------- |
| SubscriberCreated | Indicates a subscriber has been created |
| SubscriberRemoved | Indicates a subscriber has been removed. |
| EventHandlerFailed (internal) | Indicates an event handler has failed. |
| EventStoreFailed (internal) | Indicates that the event store has failed. |
| EventsPublished (internal) | Indicates that events have been published. |
| EventBroadcastFailed (internal) | Indicates that events have failed to broadcast. |
