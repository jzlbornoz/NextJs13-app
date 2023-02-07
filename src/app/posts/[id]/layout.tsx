import { Card } from '@/app/components/Card';
import { Post } from '@/app/services/Posts.services';
import { PostsModel } from '@/models/post.model';
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
                <Card item={post} />
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