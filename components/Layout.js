import Link from 'next/link'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.pageContainer}>
    
      <header className={styles.header}>
        <h1> Blog Website</h1>
        <nav className={styles.headerNav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>

      
      <div className={styles.mainContainer}>
       
        <aside className={styles.sidebar}>
          <h3>Menu</h3>
          <ul className={styles.menuList}>
            <li>
              <Link href="/">
                📊 Dashboard
              </Link>
            </li>
            <li>
              <Link href="/posts">
                📝 ALL Posts
              </Link>
            </li>
            <li>
              <Link href="/categories">
                📁 Categories
              </Link>
            </li>
            <li>
              <Link href="/tags">
                🏷️ Tags
              </Link>
            </li>
            <li>
              <Link href="/authors">
                👥 Authors
              </Link>
            </li>
           
          </ul>
        </aside>

       
        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
    </div>
  )
}


