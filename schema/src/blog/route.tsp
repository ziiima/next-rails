import "@typespec/http";
import "@typespec/openapi";
import "./model.tsp";
import "../rest-util/page.tsp";

using TypeSpec.Http;
using TypeSpec.OpenAPI;
using BlogModule;

@tag("blog")
@route("/blogs")
interface Blogs {
  @operationId("createBlog")
  create is createBlogCotnent;

  @operationId("resourceReadBlogs")
  list(): Page<Blog>;
}
