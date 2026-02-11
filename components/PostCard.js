


import Link from 'next/link'
import styles from '../styles/PostCard.module.css'

export default function PostCard({ post }) {
  return (
    <div className={styles.card}>
      
      <div className={styles.header}>
        <h2 className={styles.title}>{post.title}</h2>

        <span className={styles.category}>
          {post.category}
        </span>
      </div>

      <p className={styles.meta}>
        By {post.author} • {post.date}
      </p>

    

      <Link 
        href={`/posts/${post.id}`} 
        className={styles.readMore}
      >
        Explore →
      </Link>
    </div>
  )
}