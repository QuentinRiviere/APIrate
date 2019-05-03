const express = require('express');
const router = express.Router();
const tagController = require(process.env.BASE_PATH + '/app/controllers/cms/blog/tags');

/**
 *
 * @api {get} /api/Tags GetAll
 * @apiName GetAll
 * @apiGroup Blog Tags
 * @apiSampleRequest /api/tags
 * @apiDescription Get all Tags method
 *
 */
router.get('/', tagController.getAll);

/**
 *
 * @api {get} /api/Tags/:tagId GetById
 * @apiName GetById
 * @apiGroup Blog Tags
 * @apiSampleRequest /api/tags/:tagId
 * @apiDescription Get a tag by Id method
 *
 */
router.get('/:tagId', tagController.getById);
module.exports = router;
