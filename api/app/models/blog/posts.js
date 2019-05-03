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
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'Blog_Post_Category',
    required: false
  }],
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'Blog_Post_Tag',
    required: false
  }],
  createdAt: {
    type: Date,
    trim: true,
    required: true
  },
  updatedAt: {
    type: Date,
    trim: true,
    required: true
  },
  deletedAt: {
    type: Date,
    trim: true,
    required: false
  }
});
const Post = mongoose.model('Blog_Post', PostSchema);

module.exports = Post;
