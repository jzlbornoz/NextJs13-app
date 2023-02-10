import Link from 'next/link';
import Image from 'next/image';
import { PostsModel } from '@/models/post.model';
import { UsersModel } from '@/models/users.model';

import placeholder from '../assets/placeholder.jpg'

import styles from '../styles/components/PostCard.module.css';

const PostCard = ({ post, user }: { post: PostsModel, user: UsersModel }) => {



    return (
        <section className={styles.Card}>
            <div className={styles.CardContent}>
                <Image src={placeholder} alt={`Image ${post.title}`} width={250} />
                <div className={styles['CardContent-Header']}>
                    <h2>{post.title}</h2>
                    <h4>By: {user.username}</h4>
                </div>
                <div className={styles['CardContent-Body']}>{post.body}</div>
            </div>
        </section>
    )
}

export { PostCard }