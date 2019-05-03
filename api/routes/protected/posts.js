const express = require('express');
const router = express.Router();
const postController = require('../../app/controllers/posts');

/**
 *
 * @api {post} /api/protected/posts Create
 * @apiName Create
 * @apiGroup Posts
 * @apiPermission Authenticated User
 * @apiDescription Create post method (as authenticated users)
 * @apiParam (create) {String} title Post title.
 * @apiParam (create) {String} subTitle Post sub-title.
 * @apiParam (create) {String} content Post content.
 *
 */
router.post('/', postController.create);

/**
 *
 * @api {put} /api/protected/posts/:postId UpdateById
 * @apiName UpdateById
 * @apiGroup Posts
 * @apiPermission Authenticated User
 * @apiDescription Update a post by Id method (as authenticated users)
 * @apiParam (create) {String} [title] Post title.
 * @apiParam (create) {String} [subTitle] Post sub-title.
 * @apiParam (create) {String} [content] Post content.
 *
 */
router.put('/:postId', postController.updateById);

/**
 *
 * @api {delete} /api/protected/posts/:postId DeleteById
 * @apiName DeleteById
 * @apiGroup Posts
 * @apiPermission Authenticated User
 * @apiDescription Delete a post by Id method (as authenticated users)
 *
 */
router.delete('/:postId', postController.deleteById);
module.exports = router;