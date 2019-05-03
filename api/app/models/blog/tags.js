const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const TagSchema = new Schema({
  name: String
});

const Tag = mongoose.model('Blog_Post_Tag', TagSchema);

module.exports = Tag
