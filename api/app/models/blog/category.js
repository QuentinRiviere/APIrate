const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
  name: {
    type: String,
    intl: true,
    required: true
  }
});

mapIntlSchema('category', CategorySchema);
mapIntlSchema('categories', CategorySchema);

const Category = mongoose.model('Blog_Post_Category', CategorySchema);

module.exports = Category;
