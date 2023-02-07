import { PostsModel } from '@/models/post.model'
import Link from 'next/link'
import React from 'react'

const Card = (props: { item: PostsModel }) => {
    const post = props.item;
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link href={`/posts/${post.id}/comments`}>View comments</Link>
        </div>
    )
}

export { Card }