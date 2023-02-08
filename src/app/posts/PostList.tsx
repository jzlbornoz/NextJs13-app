import Link from 'next/link';
import { LikeButton } from '../components/LikeButton';
import { Post } from '../services/Posts.services';
import styles from '../styles/PostsList.module.css'

const PostList = async () => {
    const posts = new Post();
    const postList = await posts.getAllPost();

    if (postList.length > 6) {
        return (
            <>
                {postList.slice(0, 5).map(post => {
                    return (
                        <article key={post.id} className={styles.Post}>
                            <Link href={`/posts/${post.id}`}>
                                <h2>{post.title}</h2>
                            </Link>
                            <LikeButton />
                        </article>
                    )
                })}
            </>
        )
    } else {
        return <p>Sin producto </p>
    }
}

export { PostList } 