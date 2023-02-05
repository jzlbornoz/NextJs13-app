import { Post } from '@/app/services/Posts.services';
import { PostsModel } from '@/models/post.model';
import Link from 'next/link';
import React from 'react'

const PostByIdPage = async ({ children, params }
    : { children: React.ReactNode, params: { id: string } })
    : Promise<JSX.Element> => {

    const { id } = params;
    const postInstance = new Post();
    const post: PostsModel = await postInstance.getPostById(id);
    console.log("POST", post);


    if (post) {
        return (
            <>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <Link href={`/posts/${post.id}/comments`}>View comments</Link>
                {children}
            </>
        )
    } else {
        return (
            <div>
                <h2>Loading</h2>
            </div>
        )
    }

}

export default PostByIdPage