const express = require('express');
const router = express.Router();
const postController = require(NAMESPACES.controller.BlogPosts);

/**
 *
 * @api {get} /api/posts/all GetAll (Blog post)
 * @apiName GetAll (Blog post)
 * @apiGroup Blog Posts
 * @apiSampleRequest /api/posts/all
 * @apiDescription Get all posts method
 * @apiParam (getAll) {Number} page Page to dislay.
 * @apiParam (getAll) {Number} perPage Number of posts to display per page
 */
router.get('/all', postController.getAll);

/**
 *
 * @api {get} /api/posts/id/:postId GetById (Blog post)
 * @apiName GetById (Blog post)
 * @apiGroup Blog Posts
 * @apiSampleRequest /api/posts/getById/:postId
 * @apiDescription Get a post by Id method
 *
 */
router.get('/id/:postId', postController.getById);

module.exports = router;
