/*
 *
 *  Config and Modules imports
 *
 */
require('dotenv').config();
const port = process.env.SERVER_PORT ? process.env.SERVER_PORT : 80;
const mongoose = require('./config/database'); //database configuration
const fs = require('fs'); // Required for https
const https = require('https'); // Required for https
const http = require('http');

process.env.BASE_PATH = __dirname;

/*
 *
 *  Mongodb connection
 *
 */
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.on('open', function() {
  console.log('Connected to mongoose');
});


/*
 *
 *  Routes import
 *
 */
const app = require('./routes/routes');



/*
 *
 *  Create http server
 *
 */
let httpServer = http.createServer(app);
httpServer.listen(port, function() {
  console.log(`Node server http listening on port ${ port }`);
});

/*
 *
 *  SSL Certificates and key import
 *
 */
// const privateKey  = fs.readFileSync('../ssl/localhost.key', 'utf8');
// const certificate = fs.readFileSync('../ssl/localhost.crt', 'utf8');
// const credentials = {key: privateKey, cert: certificate};

/*
 *
 *  Create https server
 *
 */
// let httpsServer = https.createServer(credentials, app);
// httpsServer.listen(443, function(){
//   console.log('Node server http listening on port 443');
// });
