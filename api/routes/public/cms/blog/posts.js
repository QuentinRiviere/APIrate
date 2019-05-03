const express = require('express');
const router = express.Router();
const postController = require(process.env.BASE_PATH + '/app/controllers/cms/blog/posts');

/**
 *
 * @api {get} /api/posts GetAll
 * @apiName GetAll
 * @apiGroup Blog Posts
 * @apiSampleRequest /api/posts
 * @apiDescription Get all posts method
 * @apiParam (getAll) {String} page Page to dislay.
 * @apiParam (getAll) {String} perPage Number of posts to display per page
 */
router.get('/', postController.getAll);

/**
 *
 * @api {get} /api/posts/:postId GetById
 * @apiName GetById
 * @apiGroup Blog Posts
 * @apiSampleRequest /api/posts/:postId
 * @apiDescription Get a post by Id method
 *
 */
router.get('/:postId', postController.getById);
module.exports = router;
