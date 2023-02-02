import React from 'react'

const PostByIdPage = ({ params}: {params : any}): JSX.Element => {
    const { id } = params;
    return (
        <div><h1>Post {id}</h1></div>
    )
}

export default PostByIdPage