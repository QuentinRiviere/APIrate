const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;
const TagSchema = new Schema({
  name: {
    type: String,
    intl: true,
    required: true
  }
});

mapIntlSchema('tag', TagSchema);
mapIntlSchema('tags', TagSchema);

const Tag = mongoose.model('Blog_Post_Tag', TagSchema);

module.exports = Tag;
