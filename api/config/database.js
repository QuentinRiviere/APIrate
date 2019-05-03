//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://app_user_example:app_pass_example@localhost/hrdb';
mongoose.connect(mongoDB, {
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
