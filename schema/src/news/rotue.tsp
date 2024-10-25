import "@typespec/http";
import "./model.tsp";
import "../rest-util/page.tsp";

using TypeSpec.Http;

@tag("news")
@route("/news")
namespace News {
  @get
  op list(): Page<NewsModel>;
}
