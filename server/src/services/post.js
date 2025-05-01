const { Post } = require('../models/post');

const getAllPosts = async () => {
  const posts = await Post.find().lean();
  return posts;
};

const getPostById = async (id) => {
  // console.log('postID', id);

  const post = await Post.findById(id).lean();
  return post;
};

const createPost = async (postData) => {
  const post = new Post(postData);
  await post.save();
  return post;
};

const updatePost = async (id, postData) => {
  const post = await Post.findByIdAndUpdate({ _id: id }, postData, {
    new: true,
  });

  await post.save();
  return post;
};

const deletePost = async (id) => {
  const result = await Post.findByIdAndDelete(id);

  return result;
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
