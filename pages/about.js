import styles from '../styles/About.module.css'

export default function About({ timestamp }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About This Blog</h1>
      
      <div className={styles.content}>
        <p className={styles.intro}>
          This is a demonstration blog built with Next.js to showcase:
        </p>
        
        <ul className={styles.list}>
          <li>Static Generation with getStaticProps</li>
          <li>Server-Side Rendering with getServerSideProps</li>
          <li>Dynamic Routing</li>
          <li>API Routes</li>
          <li>CSS Module Styling</li>
        </ul>
        
        <p className={styles.timestamp}>
          <strong>Server-Side Rendered:</strong> This page was rendered at: {timestamp}
        </p>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      timestamp: new Date().toISOString()
    }
  }
}