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
const users_seeders = require('./_users_seeder');
const categories_seeders = require('./_categories_seeder');
const tags_seeders = require('./_tags_seeder');

const posts_seeders = require('./_posts_seeder');


/*
 *
 *  Run seeders
 *
 */
users_seeders().then(userId => {
  categories_seeders().then(categoryIds => {
    tags_seeders().then(tagsIds => {
      console.log(tagsIds)
      posts_seeders(userId, categoryIds, tagsIds);
    })
  })
}).catch(err => {
  console.log(err);
});
//posts_seeders();
