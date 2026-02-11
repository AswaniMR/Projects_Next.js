
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../../styles/PostDetail.module.css'
import { posts } from '../../data/posts'

export default function Post({ post }) {
  const router = useRouter()

  
  if (router.isFallback) {
    return <div className={styles.loading}>Loading...</div>
  }


  if (!post) {
    return (
      <div className={styles.container}>
        <h1>Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <button onClick={() => router.push('/')} className={styles.backButton}>
          ← Back to Home
        </button>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      
      <Link href="/posts" className={styles.backButton}>
        ← Back to All Posts
      </Link>

      
      <article className={styles.postCard}>
      
        <span className={styles.category}>{post.category}</span>

       
        <h1 className={styles.title}>{post.title}</h1>

        <div className={styles.meta}>
          <span className={styles.author}> By {post.author}</span>
          <span className={styles.date}>📅 {post.date}</span>
        </div>

        
        <div className={styles.divider}></div>

       
        <div className={styles.content}>
          <p className={styles.excerpt}>{post.excerpt}</p>
          
          <div className={styles.mainContent}>
            {post.content}
          </div>

         

          <div className={styles.callout}>
            <strong>💡 Pro Tip:</strong> Bookmark this article for future reference. 
            It contains valuable insights that you'll want to revisit!
          </div>
        </div>

       
        <div className={styles.tags}>
          <span className={styles.tag}>Next.js</span>
          <span className={styles.tag}>React</span>
          <span className={styles.tag}>{post.category}</span>
        </div>
      </article>
    </div>
  )
}


export async function getStaticPaths() {
  
  const paths = posts.map(post => ({
    params: { id: post.id.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}


export async function getStaticProps({ params }) {
  
  const post = posts.find(p => p.id === parseInt(params.id))

  return {
    props: {
      post: post || null
    }
  }
}