import Link from 'next/link'
import React from 'react'
import styles from '../../../styles/components/PostCard.module.css';

const postPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <button className={styles.CardButton}><Link href={`/post/${id}/comments`}>Comments</Link></button>
}

export default postPage