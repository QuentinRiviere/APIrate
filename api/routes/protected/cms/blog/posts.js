const express = require('express');
const router = express.Router();
const postController = require(NAMESPACES.controller.BlogPosts);

/**
 *
 * @api {post} /api/protected/posts/create Create (Blog post)
 * @apiName Create (Blog post)
 * @apiGroup Blog Posts
 * @apiHeader {String} x-access-token Users unique x-access-token.
 * @apiPermission Authenticated User
 * @apiDescription Create post method (as authenticated users)
 * @apiSampleRequest /api/protected/posts/create
 * @apiParam (create) {Object} title Post title <p>format : <code>{fr: "fr value", en: "en value"}</code>.<p> Or pass a <code>String</code> (saved as default language).<p>
 * @apiParam (create) {Object} subTitle Post sub-title <p>format : <code>{fr: "fr value", en: "en value"}</code>.<p> Or pass a <code>String</code> (saved as default language).<p>
 * @apiParam (create) {Object} content Post content <p>format : <code>{fr: "fr value", en: "en value"}</code>.<p> Or pass a <code>String</code> (saved as default language).<p>
 * @apiParam (create) {Object} slug Post slug <p>format : <code>{fr: "fr value", en: "en value"}</code>.<p> Or pass a <code>String</code> (saved as default language).<p>
 * @apiParam (create) {Array} [categories] Post categories Ids.
 * @apiParam (create) {Array} [tags] Post tags Ids.
 *
 */
router.post('/create', postController.create);

/**
 *
 * @api {put} /api/protected/posts/update/:postId UpdateById (Blog post)
 * @apiName UpdateById (Blog post)
 * @apiGroup Blog Posts
 * @apiHeader {String} x-access-token Users unique x-access-token.
 * @apiPermission Authenticated User
 * @apiDescription Update a post by Id method (as authenticated users)
 * @apiSampleRequest /api/protected/posts/update/:postId
 * @apiParam (create) {Object} title Post title <p>format : <code>{fr: "fr value", en: "en value"}</code>.<p> Or pass a <code>String</code> (saved as default language).<p>
 * @apiParam (create) {Object} subTitle Post sub-title <p>format : <code>{fr: "fr value", en: "en value"}</code>.<p> Or pass a <code>String</code> (saved as default language).<p>
 * @apiParam (create) {Object} content Post content <p>format : <code>{fr: "fr value", en: "en value"}</code>.<p> Or pass a <code>String</code> (saved as default language).<p>
 * @apiParam (create) {Object} slug Post slug <p>format : <code>{fr: "fr value", en: "en value"}</code>.<p> Or pass a <code>String</code> (saved as default language).<p>
 * @apiParam (create) {Array} [categories] Post categories Ids.
 * @apiParam (create) {Array} [tags] Post tags Ids.
 *
 */
router.put('/update/:postId', postController.updateById);

/**
 *
 * @api {delete} /api/protected/posts/delete/:postId DeleteById
 * @apiName DeleteById (Blog post)
 * @apiGroup Blog Posts
 * @apiHeader {String} x-access-token Users unique x-access-token.
 * @apiPermission Authenticated User
 * @apiDescription Delete a post by Id method (as authenticated users)
 * @apiSampleRequest /api/protected/posts/delete/:postId
 *
 */
router.delete('/delete/:postId', postController.deleteById);
module.exports = router;
