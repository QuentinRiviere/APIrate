const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;
const PostSchema = new Schema({
  title: {
    type: String,
    trim: true,
    intl: true,
    required: true
  },
  subTitle: {
    type: String,
    trim: true,
    intl: true,
    required: true
  },
  userId: {
    type: String,
    trim: true,
    required: false
  },
  slug: {
    type: String,
    trim: true,
    intl: true,
    required: true
  },
  content: {
    type: String,
    intl: true, // Translatable
    trim: true,
    required: true
  },
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'Blog_Post_Category',
    intl: true,
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

mapIntlSchema('post', PostSchema);
mapIntlSchema('posts', PostSchema);

const Post = mongoose.model('Blog_Post', PostSchema);

module.exports = Post;
