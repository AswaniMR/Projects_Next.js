

import PostCard from '../components/PostCard'
import { posts as allPosts } from '../data/posts'
import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Welcome to Our Blog
        </h1>
        <p className={styles.heroSubtitle}>
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
      </div>

      {/* Posts Section */}
      <div className={styles.postsSection}>
        <h2 className={styles.sectionTitle}>Latest Blog Posts</h2>
        <div className={styles.grid}>
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: allPosts
    }
  }
}