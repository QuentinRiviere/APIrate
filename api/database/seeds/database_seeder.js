const mongoose = require('../../config/database'); //database configuration
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.on('open', function() {
  console.log('Connected to mongoose');
});


/*
 *
 *  Imports seeders
 *
 */
const users_seeders = require('./users_seeder');
const posts_seeders = require('./posts_seeder');


/*
 *
 *  Run seeders
 *
 */
//users_seeders();
posts_seeders();
