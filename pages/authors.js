


import { posts } from '../data/posts'

export default function Authors() {

  const authors = posts.reduce((acc, post) => {
    if (!acc[post.author]) {
      acc[post.author] = new Set()
    }
    acc[post.author].add(post.category)
    return acc
  }, {})

  return (
    <div className="authors-container">
      <h1 className="authors-title">Our Authors</h1>

      <div className="cardGrid">
        {Object.entries(authors).map(([author, categories], index) => (
          <div key={index} className="authorCard">
            <h2 className="authorName">{author}</h2>

            <p className="categoryTitle">Categories:</p>

            <div className="categoryList">
              {[...categories].map((cat, i) => (
                <span key={i} className="categoryTag">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
