import { PostsModel } from '@/models/post.model';
import axios from 'axios'
import Link from 'next/link';
import React from 'react'



const fetchPosts = async () => {
    const { data } = await axios.get<PostsModel[]>('https://jsonplaceholder.typicode.com/posts');

    return data;
}

const PostList = async () => {
    const postList: PostsModel[] = await fetchPosts();
    if (postList.length > 6) {
        return (
            <>{postList.slice(0, 5).map(post => (
                <div key={post.id}>
                    <Link href={`/posts/${post.id}`}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </Link>
                    <button>Like</button>
                </div>
            ))}</>
        )
    } else {
        return <p>Sin producto </p>
    }
}

export { PostList } 