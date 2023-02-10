'use client'// Indica que es un client component
import React, { useState } from 'react'

const LikeButton = () => {
    const [like, setLike] = useState(false);
    return (
        <button onClick={() => setLike(!like)}>{like ? 'liked' : 'like'}</button>
    )
}

export { LikeButton }