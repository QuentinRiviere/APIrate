const express = require('express');
const router = express.Router();
const tagController = require(NAMESPACES.controller.BlogTags);


/**
 *
 * @api {post} /api/protected/tags Create (Blog tags)
 * @apiName Create (Blog tags)
 * @apiGroup Blog Tags
 * @apiHeader {String} x-access-token Users unique x-access-token.
 * @apiPermission Authenticated User
 * @apiDescription Create tag method (as authenticated users)
 * @apiParam (create) {String} [name] Category name.
 *
 */
router.post('/', tagController.create);

/**
 *
 * @api {put} /api/protected/tags/:categoryId UpdateById (Blog tags)
 * @apiName UpdateById (Blog tags)
 * @apiGroup Blog Tags
 * @apiHeader {String} x-access-token Users unique x-access-token.
 * @apiPermission Authenticated User
 * @apiDescription Update a tag by Id method (as authenticated users)
 * @apiParam (updateById) {String} [name] Category name.
 *
 */
router.put('/:tagId', tagController.updateById);

/**
 *
 * @api {delete} /api/protected/Tags/:tagId DeleteById (Blog tags)
 * @apiName DeleteById (Blog tags)
 * @apiGroup Blog Tags
 * @apiPermission Authenticated User
 * @apiDescription Delete a tag by Id method (as authenticated users)
 *
 */
router.delete('/:tagId', tagController.deleteById);
module.exports = router;
