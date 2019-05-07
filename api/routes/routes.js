// Dependencies
const bodyParser = require('body-parser');
const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const app = express();

// middleware imports
const validateAdmin = require(NAMESPACES.middleware.ValidateAdmin);
const validateUser = require(NAMESPACES.middleware.ValidateUser);

// routes imports
const auth = require(NAMESPACES.routes.AuthBasic);
const linkedin = require(NAMESPACES.routes.AuthLinkedin);
const users = require(NAMESPACES.routes.Users);
const protectedUsers = require(NAMESPACES.routes.ProtectedUsers);
const posts = require(NAMESPACES.routes.BlogPosts);
const protectedPosts = require(NAMESPACES.routes.ProtectedBlogPosts);
const categories = require(NAMESPACES.routes.BlogCategories);
const tags = require(NAMESPACES.routes.BlogTags);

app.set('secretKey', CONFIG.jwt_secret_key ? CONFIG.jwt_secret_key : Math.random().toString(36).substring(20)); // jwt secret token

/*
 *
 *  Middleware declaration
 *
 */
app.use(cookieParser());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
  next();
});
app.use(session({
  secret: 'nodeRestApi',
  resave: false,
  saveUninitialized: false,
}));



/*
 *
 *  Routes prefix definitions
 *
 */
let api = '/api';
let apiPriv = '/api/protected';
let apiAdmin = '/api/admin';

/*
 *
 *  Passport initialisation
 *
 */
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function(user, done) {
  // placeholder for custom user serialization
  // null is for errors
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  // placeholder for custom user deserialization.
  // maybe you are going to get the user from mongo by id?
  // null is for errors
  done(null, user);
});

/*
 *
 *  Serve documentation
 *
 */
app.use('/doc', express.static('doc/views'));

/*
 *
 * Base route
 *
 */
app.get('/', function(req, res) {
  res.json({
    'tutorial': 'Build REST API with node.js',
  });
});

/*
 *
 *  Public routes
 *
 */
app.use(api + '/users', users);
app.use(api + '/posts', posts);
app.use(api + '/categories', categories);
app.use(api + '/tags', tags);

/*
 *
 *  Specific Auth routes
 *
 */
app.use(api + '/auth', auth);
app.use(api + '/auth', linkedin);

/*
 *
 *  Protected routes
 *
 */
app.use(apiPriv, validateUser);
app.use(apiPriv + '/users', validateUser, protectedUsers);
app.use(apiPriv + '/posts', validateUser, protectedPosts);

/*
 *
 *  Admin route
 *
 */
app.use(apiAdmin, validateAdmin);



/*
 *
 *  Handle favicon
 *
 */
app.get('/favicon.ico', function(req, res) {
  res.sendStatus(204);
});

// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
/*
 *
 *  Handle 404 error
 *
 */
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle errors
app.use(function(err, req, res, next) {
  console.log(err);
  if (err.status === 404)
    res.status(404).json({
      message: 'Not found'
    });
  else
    res.status(500).json({
      message: 'Something looks wrong :( !!!'
    });
});





module.exports = app;
