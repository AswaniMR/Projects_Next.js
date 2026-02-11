import PostCard from '../components/PostCard'
import { posts as allPosts } from '../data/posts'
import styles from '../styles/Posts.module.css'

export default function Posts() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Posts</h1>
      <p className={styles.description}>Browse through all our blog articles</p>
      
      <div className={styles.postsList}>
        {allPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}