import { posts } from '../../../data/postss';

export default function handler(req, res) {
  if (req.method === 'GET') {
    
    res.status(200).json(posts);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}