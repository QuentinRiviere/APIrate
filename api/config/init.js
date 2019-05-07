require('dotenv').config();
const DefineEnv = require('./_env'); // Languages definition
DefineEnv();
const DefineNamespaces = require('./_namespaces'); // Facades definition
DefineNamespaces();
const DefineCore = require(NAMESPACES.core); // Required DefineNamespaces to be load and launch before
DefineCore();


const mongoose = require('./_database'); //database configuration

/*
 *
 *  Set internationalization as global plugin for mongoose
 *
 */
mongoose.plugin(require(NAMESPACES.helpers.Intl), {
  languages: CONFIG.locales,
  defaultLanguage: CONFIG.default_locale,
});

/*
 *
 *  Database connection
 *
 */
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.on('open', function() {
  console.log('Connected to mongoose');
});
