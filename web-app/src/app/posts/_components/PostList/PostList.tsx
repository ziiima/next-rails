import { listPosts } from "@/generated/post/post";
import { FC } from "react";

export const PostList: FC = async () => {
    const posts = await listPosts()
    return (
        <div>
            { posts.items.map(item => (
                <div key={item.id}>
                    <p>{item.title}</p>
                    <p>{item.body}</p>
                </div>
            )) }
        </div>
    )
}
