require "test_helper"

class BlogTest < ActiveSupport::TestCase
  test "should invalid title when short" do
    title = ""
    blog = build_blog(title)
    assert_equal(false, blog.valid?)
    assert_includes blog.errors[:title], "is too short (minimum is 1 character)" 
  end

  test "should invalid when title is over 256" do
    title = "a" * 256
    blog = build_blog(title)
    assert_equal(false, blog.valid?)
    assert_includes blog.errors[:title], "is too long (maximum is 255 characters)" 
  end

  test "should invalid when title is null" do
    title = nil
    blog = build_blog(title)
    assert_equal(false, blog.valid?)
    assert_includes blog.errors[:title], "is too short (minimum is 1 character)" 
  end

  test "should valid when length of title is 1" do
    title = "a"
    blog = build_blog(title)
    assert_equal(true, blog.valid?)
    assert_equal(blog.title, title)
  end

  test "should valid when length of title is 255" do
    title = "a" * 255
    blog = build_blog(title)
    assert_equal(true, blog.valid?)
    assert_equal(blog.title, title)
  end

  def build_blog(title)
    Blog.new(title: title)
  end
end
