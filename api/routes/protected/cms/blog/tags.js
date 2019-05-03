const express = require('express');
const router = express.Router();
const tagController = require(process.env.BASE_PATH + '/app/controllers/cms/blog/tags');


/**
 *
 * @api {post} /api/protected/tags Create
 * @apiName Create
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
 * @api {put} /api/protected/tags/:categoryId UpdateById
 * @apiName UpdateById
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
 * @api {delete} /api/protected/Tags/:tagId DeleteById
 * @apiName DeleteById
 * @apiGroup Blog Tags
 * @apiPermission Authenticated User
 * @apiDescription Delete a tag by Id method (as authenticated users)
 *
 */
router.delete('/:tagId', tagController.deleteById);
module.exports = router;
