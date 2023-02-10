import { Card } from '@/components/Card';
import { Post } from '@/services/Posts.services';
import { UsersService } from '@/services/Users.services';
import { PostsModel } from '@/models/post.model';
import { UsersModel } from '@/models/users.model';
import React from 'react'

const PostByIdPage = async ({ children, params }
    : { children: React.ReactNode, params: { id: string } })
    : Promise<JSX.Element> => {

    const { id } = params;
    const postInstance = new Post();
    const post: PostsModel = await postInstance.getPostById(id);
    const userService = new UsersService();
    const user: UsersModel = await userService.getUserById(post.userId);
    console.log("POST", post);

    if (post) {
        return (
            <>
                <Card item={post} user={user}/>
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