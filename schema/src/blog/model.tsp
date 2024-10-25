model Blog {
  @visibility("read")
  @key
  id: uint64;

  @visibility("create")
  title: blogTitle;
}

@minLength(1)
@maxLength(255)
scalar blogTitle extends string;

@withVisibility("create")
model CreateBlogContent {
  ...Blog;
}

op createBlogCotnent(dto: CreateBlogContent): Blog;
