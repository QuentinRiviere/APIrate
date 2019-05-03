// const User = require("../../models/users");
const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const port = `${process.env.SERVER_PORT ? (parseInt(process.env.SERVER_PORT) !== 80 ? ':' + process.env.SERVER_PORT : '') : ''}`;
const address = `${process.env.SERVER_ADDRESS ? process.env.SERVER_ADDRESS : 'localhost'}`;

passport.use(new LinkedInStrategy({
  clientID: process.env.LINKEDIN_KEY,
  clientSecret: process.env.LINKEDIN_SECRET,
  callbackURL: `http://${address}${port}/auth/linkedin/callback`,
  scope: ['r_emailaddress', 'r_basicprofile'],
  state: true
}, function(accessToken, refreshToken, profile, done) {
  // asynchronous verification, for effect...
  console.log(accessToken);
  process.nextTick(function() {
    // To keep the example simple, the user's LinkedIn profile is returned to
    // represent the logged-in user. In a typical application, you would want
    // to associate the LinkedIn account with a user record in your database,
    // and return that user instead.
    // console.log(profile);
    return done(null, profile);
  });
}));

module.exports = passport;
