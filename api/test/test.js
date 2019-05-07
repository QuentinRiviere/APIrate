require('dotenv').config();
const DefineEnv = require('../config/_env'); // Languages definition
DefineEnv();
const DefineNamespaces = require('../config/_namespaces'); // Facades definition
DefineNamespaces();
const DefineCore = require(NAMESPACES.core); // Required DefineNamespaces to be load and launch before
DefineCore();
const mongoose = require('mongoose'); //database configuration
mongoose.plugin(require(NAMESPACES.helpers.Intl), {
  languages: CONFIG.locales,
  defaultLanguage: CONFIG.default_locale
});

const schema_blog_category = require('./schemas/blog/category');
const schema_blog_tag = require('./schemas/blog/tag');
const schema_blog_post = require('./schemas/blog/post');

describe('MODELS : ', function() {

  schema_blog_category();
  schema_blog_tag();
  schema_blog_post();

})
