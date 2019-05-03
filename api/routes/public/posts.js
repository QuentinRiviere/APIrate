const express = require('express');
const router = express.Router();
const postController = require('../../app/controllers/posts');

/**
 *
 * @api {get} /api/posts GetAll
 * @apiName GetAll
 * @apiGroup Posts
 * @apiSampleRequest /api/posts
 * @apiDescription Get all posts method
 *
 */
router.get('/', postController.getAll);

/**
 *
 * @api {get} /api/posts/:postId GetById
 * @apiName GetById
 * @apiGroup Posts
 * @apiSampleRequest /api/posts/:postId
 * @apiDescription Get a post by Id method
 *
 */
router.get('/:postId', postController.getById);
module.exports = router;