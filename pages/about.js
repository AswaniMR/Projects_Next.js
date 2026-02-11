import { posts } from '../data/posts'

export default function About({ posts }) {
  return (
    <div className="about-container">
      <h1 className="about-title">About This Blog</h1>

      <div className="about-content">
        <p className="about-intro">
          This blog contains {posts.length} articles written by our authors.
        </p>

        <ul className="about-list">
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong> — {post.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts
    }
  }
}
