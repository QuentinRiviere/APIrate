const express = require('express');
const router = express.Router();
const tagController = require(NAMESPACES.controller.BlogTags);

/**
 *
 * @api {get} /api/Tags GetAll (Blog tags)
 * @apiName GetAll (Blog tags)
 * @apiGroup Blog Tags
 * @apiSampleRequest /api/tags
 * @apiDescription Get all Tags method
 *
 */
router.get('/', tagController.getAll);

/**
 *
 * @api {get} /api/Tags/:tagId GetById (Blog tags)
 * @apiName GetById (Blog tags)
 * @apiGroup Blog Tags
 * @apiSampleRequest /api/tags/:tagId
 * @apiDescription Get a tag by Id method
 *
 */
router.get('/:tagId', tagController.getById);
module.exports = router;
