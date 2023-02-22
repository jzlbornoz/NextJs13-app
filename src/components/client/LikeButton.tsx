'use client'// Indica que es un client component
import { AppContext } from '@/context/AppContex'
import { PostsModel } from '@/models/post.model';
import React, { useContext } from 'react'

const LikeButton = ({ payload }: { payload: PostsModel }) => {
    const { addToFavorites, appState } = useContext(AppContext);
    return (
        <button onClick={() => addToFavorites(payload)}>{appState.favorites.includes(payload) ? "Liked" : "Like"}</button>
    )
}

export { LikeButton }