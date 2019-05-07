const express = require('express');
const router = express.Router();
const userController = require(NAMESPACES.controller.Users);
const validateAdmin = require(NAMESPACES.middleware.ValidateAdmin);

router.get('/profile', userController.profile)
router.post('/update/linkedin/profile', userController.updateLinkedinProfile);

/**
 *
 * @api {get} /api/protected/users/all getAll (Users)
 * @apiName getAll (Blog categories)
 * @apiGroup Users
 * @apiHeader {String} x-access-token Users unique x-access-token.
 * @apiPermission Admin
 * @apiDescription Get all users (as authenticated user with admin role)
 * @apiSampleRequest /api/protected/users/all
 * @apiParam (getAll) {Number} page Page to dislay.
 * @apiParam (getAll) {Number} perPage Number of posts to display per page
 */
router.get('/all', validateAdmin, userController.getAll);

module.exports = router;
