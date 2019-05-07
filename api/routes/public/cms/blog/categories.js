const express = require('express');
const router = express.Router();
const categoryController = require(NAMESPACES.controller.BlogCategories);

/**
 *
 * @api {get} /api/categories/all GetAll (Blog categories)
 * @apiName GetAll (Blog categories)
 * @apiGroup Blog Categories
 * @apiSampleRequest /api/categories/all
 * @apiDescription Get all categories method
 *
 */
router.get('/all', categoryController.getAll);

/**
 *
 * @api {get} /api/categories/id/:categoryId GetById (Blog categories)
 * @apiName GetById (Blog categories)
 * @apiGroup Blog Categories
 * @apiSampleRequest /api/categories/id/:categoryId
 * @apiDescription Get a category by Id method
 *
 */
router.get('/id/:categoryId', categoryController.getById);


/**
 *
 * @api {post} /api/categories/name GetByName (Blog categories)
 * @apiName GetByName (Blog categories)
 * @apiGroup Blog Categories
 * @apiDescription Get a post by Id method
 * @apiSampleRequest /api/categories/name
 * @apiParam (GetByName) {Object} name Category name. <p>format : <code>{fr: "fr value", en: "en value"}</code>.<p> Or pass a <code>String</code> (saved as default language).<p>
 */
router.post('/name', categoryController.getByName);

module.exports = router;
