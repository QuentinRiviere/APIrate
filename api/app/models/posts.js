const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const PostSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  subTitle: {
    type: String,
    trim: true,
    required: true
  },
  userId: {
    type: String,
    trim: true,
    required: false
  },
  content: {
    type: String,
    trim: true,
    required: true
  },
  createdAt: {
    type: Date,
    trim: true,
    required: true
  },
  updatedAt: {
    type: Date,
    trim: true,
    required : true
  },
  deletedAt: {
    type: Date,
    trim: true,
    required: false
  }
});
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;