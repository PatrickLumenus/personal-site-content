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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentApi = void 0;
const core_1 = require("@domeniere/core");
const blog_module_1 = __importStar(require("./blog/blog.module"));
class ContentApi extends core_1.Api {
    constructor(blogRepository, eventStore) {
        super('content', eventStore);
        // Blog module.
        const blogModule = new blog_module_1.default();
        blogModule.registerRepositoryInstance(blog_module_1.BlogsRepository, blogRepository);
        this.registerModule(blogModule);
    }
    printWelcome() {
        console.log("Welcome to Domeniere");
    }
}
exports.ContentApi = ContentApi;
