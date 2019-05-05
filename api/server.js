/*
 *
 *  Config and Modules imports
 *
 */
require('./config/init');
const port = CONFIG.server_port;
const fs = require('fs'); // Required for https
const https = require('https'); // Required for https
const http = require('http');

/*
 *
 *  Routes import
 *
 */
const app = require('./routes/routes');

console.log(SCHEMAINTL_MAPPING);

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
