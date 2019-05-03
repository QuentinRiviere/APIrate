const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
  name: String
});

const Category = mongoose.model('Blog_Post_Category', CategorySchema);

module.exports = Category
