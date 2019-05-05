const express = require('express');
const router = express.Router();
const categoryController = require(NAMESPACES.controller.BlogCategories);

/**
 *
 * @api {get} /api/categories GetAll (Blog categories)
 * @apiName GetAll (Blog categories)
 * @apiGroup Blog Categories
 * @apiSampleRequest /api/categories
 * @apiDescription Get all categories method
 *
 */
router.get('/', categoryController.getAll);

/**
 *
 * @api {get} /api/categories/:categoryId GetById (Blog categories)
 * @apiName GetById (Blog categories)
 * @apiGroup Blog Categories
 * @apiSampleRequest /api/categories/:categoryId
 * @apiDescription Get a category by Id method
 *
 */
router.get('/:categoryId', categoryController.getById);
module.exports = router;
