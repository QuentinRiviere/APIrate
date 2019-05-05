const express = require('express');
const router = express.Router();
const categoryController = require(NAMESPACES.controller.BlogCategories);

/**
 *
 * @api {post} /api/protected/categories Create (Blog categories)
 * @apiName Create (Blog categories)
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
 * @api {put} /api/protected/categories/:categoryId UpdateById (Blog categories)
 * @apiName UpdateById (Blog categories)
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
 * @api {delete} /api/protected/categories/:categoryId DeleteById (Blog categories)
 * @apiName DeleteById (Blog categories)
 * @apiGroup Blog Categories
 * @apiPermission Authenticated User
 * @apiDescription Delete a category by Id method (as authenticated users)
 *
 */
router.delete('/:categoryId', categoryController.deleteById);
module.exports = router;
