import { CommentsCard } from "../components/CommentsCard"

import { CommentsModel } from "../models/comments.model";

import { API } from "../services/API.services";

import styles from '../styles/components/Comments.module.css';



const CommentList = async () => {

    const service = new API<CommentsModel>();
    const comments = await service.getAllComments();
    return (
        <section className={styles.Comments}>
            {comments.map(item => (
                <div key={item.id}>
                    <CommentsCard comment={item} />
                </div>
            ))}
        </ section>
    )
}

export { CommentList } 