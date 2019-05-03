const express = require('express');
const router = express.Router();
const categoryController = require(process.env.BASE_PATH + '/app/controllers/cms/blog/categories');

/**
 *
 * @api {post} /api/protected/categories Create
 * @apiName Create
 * @apiGroup Blog Categories
 * @apiHeader {String} x-access-token Users unique x-access-token.
 * @apiPermission Authenticated User
 * @apiDescription Create category method (as authenticated users)
 * @apiParam (create) {String} [name] Category name.
 *
 */
router.post('/', categoryController.create);

/**
 *
 * @api {put} /api/protected/categories/:categoryId UpdateById
 * @apiName UpdateById
 * @apiGroup Blog Categories
 * @apiHeader {String} x-access-token Users unique x-access-token.
 * @apiPermission Authenticated User
 * @apiDescription Update a category by Id method (as authenticated users)
 * @apiParam (updateById) {String} [name] Category name.
 *
 */
router.put('/:tagId', categoryController.updateById);

/**
 *
 * @api {delete} /api/protected/categories/:categoryId DeleteById
 * @apiName DeleteById
 * @apiGroup Blog Categories
 * @apiPermission Authenticated User
 * @apiDescription Delete a category by Id method (as authenticated users)
 *
 */
router.delete('/:categoryId', categoryController.deleteById);
module.exports = router;
