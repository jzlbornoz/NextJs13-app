'use client'
import { AppContext } from '@/context/AppContex';
import React, { useContext } from 'react'
import { PostCardMini } from './PostCardMini';

const FavoriteList = () => {
    const { appState } = useContext(AppContext);
    if (appState.favorites.length > 0) {
        return (
            <section>
                {appState.favorites.map(item => (
                    <div key={item.id}>
                        <PostCardMini post={item}/>
                    </div>
                ))}
            </section>
        )
    } else {
        return <h2>No Post</h2>
    }
}

export { FavoriteList }