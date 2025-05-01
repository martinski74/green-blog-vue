const { Schema, model } = require('mongoose');
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  likeCounter: {
    type: Number,
    default: 0,
  },
});

const Post = model('Post', postSchema);

module.exports = { Post };
