import styles from '../styles/components/PostList.module.css';
import { API } from '@/services/API.services';
import { PostsModel } from '@/models/post.model';
import { PostCardMini } from './client/PostCardMini';

import { Suspense } from 'react'
import { LoadingComponent } from '@/components/LoadingComponent'



const PostList = async () => {
    const APIservice = new API<PostsModel>();
    const postList = await APIservice.getAllPost();

    /*PostList.slice hace que por parte del servidor se devuelvan los primeros 5 post, 
    es decir que el cliente no recibe informacion de mas */
    return (
        <section className={styles.PostList}>
            {postList.slice(0, 15).map(post => {
                return (
                    <Suspense fallback={<LoadingComponent />} key={post.id}>
                        <PostCardMini post={post} />
                    </Suspense>
                )
            })}
        </section>


    )
}

export { PostList } 