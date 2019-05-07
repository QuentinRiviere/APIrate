//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = `mongodb://${CONFIG.app_mongo_user}:${CONFIG.app_mongo_password}@${CONFIG.server_ip}/${CONFIG.app_mongo_db}`;
mongoose.connect(mongoDB, {
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
