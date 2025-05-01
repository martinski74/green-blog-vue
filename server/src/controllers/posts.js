const { Router } = require('express');
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require('../services/post');

const postRouter = Router();

postRouter.get('/', async (req, res) => {
  // Logic to get all posts
  const posts = await getAllPosts();
  res.json(posts).status(200);
});

postRouter.get('/details/:id', async (req, res) => {
  const post = await getPostById(req.params.id);
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  res.status(200).json(post);
});

postRouter.post('/', async (req, res) => {
  const postData = req.body;
  const newPost = await createPost(postData);
  res.status(201).json(newPost);
});

postRouter.put('/details/:id', async (req, res) => {
  const { id } = req.params;
  const postData = req.body;
  const updatedPost = await updatePost(id, postData);
  if (!updatedPost) {
    return res.status(404).json({ message: 'Post not found' });
  }
  res.status(200).json(updatedPost);
});

postRouter.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  const response = await deletePost(id);

  res.status(204).json(response);
});

module.exports = { postRouter };
