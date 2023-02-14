'use client'

import { CommentsModel } from '@/models/comments.model'
import Image from 'next/image';
import React from 'react'

import styles from '../styles/components/CommentCard.module.css';
import placeholder from '../assets/placeholder.jpg'
import { motion } from 'framer-motion';


const CommentsCard = ({ comment }: { comment: CommentsModel }) => {

    const container = {
        hidden: { opacity: 0.4 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            }
        }
    }

    const item = {
        hidden: { opacity: 0, scale: 0 },
        show: { opacity: 1, scale: 1 }
    }
    return (
        <motion.section className={styles.CommentCard}
            variants={container}
            initial="hidden"
            animate="show"
        >
            <motion.div variants={item}>
                <Image
                    src={`https://i.pravatar.cc/150?u=${comment.email}` || placeholder}
                    alt={'user image'}
                    width={70} height={70}
                    
                />
            </motion.div>
            <div className={styles.CommentsText}>
                <motion.h4 variants={item}>{comment.email}</motion.h4>
                <motion.p variants={item}>{comment.body.slice(0, 72)}</motion.p>
            </div>
        </motion.section>

    )
}

export { CommentsCard }