import "@typespec/http";
import "./model.tsp";
import "../rest-util/page.tsp";

using TypeSpec.Http;

@tag("blog")
@route("/blogs")
interface Blogs {
  create is createBlogCotnent;
  list(): Page<Blog>;
}
