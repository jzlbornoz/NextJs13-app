import { CommentsModel } from '@/models/comments.model'
import Image from 'next/image';
import React from 'react'

import styles from '../styles/components/CommentCard.module.css';
import placeholder from '../assets/placeholder.jpg'

const CommentsCard = ({ comment }: { comment: CommentsModel }) => {
    return (
        <section className={styles.CommentCard}>
            <div>
                <Image
                    src={`https://i.pravatar.cc/150?u=${comment.email}` || placeholder}
                    alt={'user image'}
                    width={70} height={70}
                />
            </div>
            <div className={styles.CommentsText}>
                <h4>{comment.email}</h4>
                <p>{comment.body.slice(0, 72)}</p>
            </div>
        </section>

    )
}

export { CommentsCard }