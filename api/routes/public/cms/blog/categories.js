const express = require('express');
const router = express.Router();
const categoryController = require(process.env.BASE_PATH + '/app/controllers/cms/blog/categories');

/**
 *
 * @api {get} /api/categories GetAll
 * @apiName GetAll
 * @apiGroup Blog Categories
 * @apiSampleRequest /api/categories
 * @apiDescription Get all categories method
 *
 */
router.get('/', categoryController.getAll);

/**
 *
 * @api {get} /api/categories/:categoryId GetById
 * @apiName GetById
 * @apiGroup Blog Categories
 * @apiSampleRequest /api/categories/:categoryId
 * @apiDescription Get a category by Id method
 *
 */
router.get('/:categoryId', categoryController.getById);
module.exports = router;
