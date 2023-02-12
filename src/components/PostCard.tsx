'use client'

import Image from 'next/image';

import { PostsModel } from '@/models/post.model';
import { UsersModel } from '@/models/users.model';


import styles from '../styles/components/PostCard.module.css';

import { motion } from 'framer-motion';

const PostCard = ({ post, user, image }: { post: PostsModel, user: UsersModel, image: string }) => {


    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                staggerDirection: -1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, scale: 0 },
        show: { opacity: 1, scale: 1 }
    }


    return (
        <motion.section className={styles.Card}
            variants={container}
            initial="hidden"
            animate="show"
        >
            <div className={styles.CardContent}>
                <motion.div variants={item}>
                    <Image src={image} alt={`Image ${post.title}`} width={200} height={200} placeholder = 'empty' />
                </motion.div>
                <div className={styles['CardContent-Header']} >
                    <motion.h2 variants={item}>{post.title}</motion.h2>
                    <motion.h4 variants={item}>By: {user.username}</motion.h4>
                </div>
                <div className={styles['CardContent-Body']}>{post.body}</div>
            </div>
        </motion.section>
    )
}

export { PostCard }