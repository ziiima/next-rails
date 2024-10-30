import "@typespec/http";
namespace TypeSpec.Http;

model ErrorResponse<Status, Body> {
  @statusCode
  statusCode: Status;

  @body
  error: Body;
}
