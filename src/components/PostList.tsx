import Link from 'next/link';
import { LikeButton } from './LikeButton';
import styles from '../styles/components/PostList.module.css';
import { API } from '@/services/API.services';
import { PostsModel } from '@/models/post.model';

const PostList = async () => {
    const APIservice = new API<PostsModel>();
    const postList = await APIservice.getAllPost();

    /*PostList.slice hace que por parte del servidor se devuelvan los primeros 5 post, 
    es decir que el cliente no recibe informacion de mas */
    return (
        <section className={styles.PostList}>
            <h2 className={styles.PostListTitle}>Most Popular</h2>
            {postList.slice(0, 15).map(post => {
                return (
                    <article key={post.id} className={styles.Post}>
                        <Link href={`/post/${post.id}`}>
                            <h2>{post.title.length > 18 ? `${post.title.slice(0, 18).trimEnd()}...` : post.title}</h2>
                            <p>{post.body.slice(0, 28)}...</p>
                        </Link>
                        <LikeButton />
                    </article>
                )
            })}
        </section>


    )
}

export { PostList } 