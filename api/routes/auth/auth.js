const express = require('express');
const router = express.Router();
const authController = require('../../app/controllers/auth');

/**
 *
 * @api {post} /api/auth/register Register
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
 * @api {post} /api/auth/authenticate Authenticate
 * @apiName Authenticate
 * @apiGroup Auth
 * @apiDescription Authenticate as user (with email and password)
 * and receive a json web token for protected routes requests
 * @apiParam (authenticate) {String} Email User email.
 * @apiParam (authenticate) {Number} Password User password.
 */
router.post('/authenticate', authController.authenticate);

module.exports = router;
