require('dotenv').config();
const DefineEnv = require('../config/_env'); // Languages definition
DefineEnv();
const DefineNamespaces = require('../config/_namespaces'); // Facades definition
DefineNamespaces();
const DefineCore = require(NAMESPACES.core); // Required DefineNamespaces to be load and launch before
DefineCore();

const schema_blog_category = require('./schemas/blog/category');

schema_blog_category();

