const express = require('express');
const router = express.Router();
const linkedin = require('../../app/controllers/passport/linkedinAuth');
const authController = require('../../app/controllers/auth');

/**
 *
 * @api {post} /api/register Register
 * @apiName Register
 * @apiGroup Auth
 * @apiDescription Register as new user
 * @apiParam (register) {String} firstname User firstname.
 * @apiParam (register) {String} lastname User lastname.
 * @apiParam (register) {String} email User email.
 * @apiParam (register) {Number} password User password.
 *
 *
 */
router.post('/register', authController.register);

/**
 *
 * @api {post} /api/authenticate Authenticate
 * @apiName Authenticate
 * @apiGroup Auth
 * @apiDescription Authenticate as user (with email and password)
 * and receive a json web token for protected routes requests
 * @apiParam (register) {String} Email User email.
 * @apiParam (register) {Number} Password User password.
 */
router.post('/authenticate', authController.authenticate);

// Linkedin authenticate
router.get('/linkedin',
  linkedin.authenticate('linkedin'),
  function(req, res) {
    // The request will be received to linkedin for authentication, so this
    // function will not be called.
  }
);

// linkedin login callback
router.get('/linkedin/callback', linkedin.authenticate('linkedin', {
  successRedirect: '/api/users/update/linkedin/profile',
  failureRedirect: '/users/authenticate'
}));

module.exports = router;
