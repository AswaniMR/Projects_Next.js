import { posts } from '../../../data/posts';

export default function handler(req, res) {
  const { id } = req.query;
  
  if (req.method === 'GET') {
    const post = posts.find(p => p.id === parseInt(id));
    
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
