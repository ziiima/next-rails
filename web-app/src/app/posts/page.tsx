import { PostList } from "./_components/PostList"

const PostsPage = async () => {
  return (
    <div className="grid grid-cols-4">
      <div>
        <h1>PostsPage</h1>
        <PostList />
      </div>
    </div>
  )
}

export default PostsPage
