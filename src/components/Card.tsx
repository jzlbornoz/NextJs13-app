import { PostsModel } from '@/models/post.model';
import { UsersModel } from '@/models/users.model';
import Link from 'next/link';

import styles from '../styles/components/Card.module.css';

const Card = (props: { item: PostsModel, user: UsersModel }) => {

    const post = props.item;
    const user = props.user;

    return (
        <section className={styles.Card}>
            <div className={styles.CardHead}>
                <p>{user.name}</p>
            </div>
            <div className={styles.CardPost}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <Link href={`/posts/${post.id}/comments`}> <p>View comments </p></Link>
            </div>

        </section>
    )
}

export { Card }