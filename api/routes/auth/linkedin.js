const express = require('express');
const router = express.Router();
const linkedin = require('../../app/controllers/passport/linkedinAuth');

/**
 *
 * @api {get} /api/auth/linkedin Authenticate
 * @apiName Authenticate
 * @apiGroup Linkedin OAuth2
 * @apiDescription Call passport-linkedin-oauth2 authenticate method
 *
 */
router.get('/linkedin',
  linkedin.authenticate('linkedin'),
  function(req, res) {
    // The request will be received to linkedin for authentication, so this
    // function will not be called.
  }
);

/**
 *
 * @api {get} /api/auth/linkedin/callback Callback
 * @apiName Callback
 * @apiGroup Linkedin OAuth2
 * @apiDescription Callback used for passport-linkedin-oauth2 authenticate method
 *
 */
router.get('/linkedin/callback', linkedin.authenticate('linkedin', {
  successRedirect: '/api/users/update/linkedin/profile',
  failureRedirect: '/users/authenticate'
}));

module.exports = router;
