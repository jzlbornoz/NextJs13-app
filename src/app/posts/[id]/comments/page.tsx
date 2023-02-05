import { CommentsModel } from "@/models/comments.model";
import { PostsModel } from "@/models/post.model";



const fetchComments = async (id: PostsModel['id']) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { cache: 'no-store' });
    console.log('fetching');
    return res.json();
}

const CommentsPage = async () => {
    const comments: Promise<CommentsModel[]> = await fetchComments(1);
    return (
        <>
            {(await comments).map(item => (
                <>
                    <h2>{item.name}</h2>
                    <p>{item.body}</p>
                </>
            ))}
        </>
    )
}

export default CommentsPage 