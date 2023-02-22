'use client'
import Link from 'next/link'

import { LikeButton } from './LikeButton'
import { PostsModel } from '@/models/post.model'

import styles from '../../styles/components/PostCardMini.module.css';
import { motion } from 'framer-motion';

const PostCardMini = ({ post, key }: { post: PostsModel, key: PostsModel['id'] }) => {

    const container = {
        hidden: { opacity: 0.4 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.18,
            }
        }
    }

    const item = {
        hidden: { opacity: 0, scale: 0 },
        show: { opacity: 1, scale: 1 }
    }

    return (
        <motion.article className={styles.PostCardMini}
            variants={container}
            initial="hidden"
            animate="show"
        >
            <Link href={`/post/${post.id}`}>
                <motion.h2 variants={item}>
                    {post.title.length > 18 ? `${post.title.slice(0, 14).trimEnd()}...` : post.title}
                </motion.h2>
                <motion.p variants={item}>{post.body.slice(0, 28)}...</motion.p>
            </Link>
            <LikeButton payload={post} />
        </motion.article>
    )
}

export { PostCardMini }