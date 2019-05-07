const postModel = require(NAMESPACES.model.BlogPost);
const categoryModel = require(NAMESPACES.model.BlogCategory);
const tagModel = require(NAMESPACES.model.BlogTag);
module.exports = {
  getById: function(req, res, next) {
    console.log(req.body);
    let locale = req.param('locale') && CONFIG.locales.includes(req.param('locale')) ? req.param('locale') : CONFIG.default_locale;
    postModel.findById(req.params.postId, function(err, post) {
      if (err) {
        next(err);
      } else {
        toLocaleDocument({
          document: post,
          locale: locale,
          populate: ['categories', 'tags'],
          fields: [
            'id',
            'title',
            'subTitle',
            'userId',
            'content',
            'categories',
            'tags',
            'createdAt',
            'updatedAt',
            'deletedAt'
          ]
        }).then(result => {
          res.json({
            status: 'success',
            message: 'post found!!!',
            data: {
              post: result
            }
          });
        }).catch(err => {
          next(err);
        });
      }
    }).populate('categories').populate('tags');
  },
  getAll: function(req, res, next) {
    console.log(req.body);
    let postsList = [];
    let locale = req.param('locale') && CONFIG.locales.includes(req.param('locale')) ? req.param('locale') : CONFIG.default_locale;
    let perPage = req.param('perPage') ? parseInt(req.param('perPage')) : parseInt(postModel.estimatedDocumentCount()),
      page = Math.max(0, req.param('page'));

    postModel.estimatedDocumentCount().exec(function(err, count) {


      let paginate = safePaginate({
        perPage: perPage,
        page: page,
        count: count
      })

      postModel.find({})
        .populate('categories')
        .populate('tags')
        .skip((paginate.perPage * paginate.page))
        .limit(paginate.perPage)
        .exec(function(err, posts) {
          if (err) {
            next(err);
          } else {
            // Global function toLocaleDocument (location : api/core/functions/documents.js)
            toLocaleDocument({
              collection: posts,
              locale: locale,
              populate: ['categories', 'tags'],
              fields: [
                'id',
                'title',
                'subTitle',
                'userId',
                'content',
                'slug',
                'categories',
                'tags',
                'createdAt',
                'updatedAt',
                'deletedAt',
              ],
            }).then(result => {
              res.json({
                posts: result,
                page: paginate.page + 1,
                pages: Math.floor(count / paginate.perPage),
              });
            }).catch(err => {
              next(err);
            });
          }
        });
    });
  },
  updateById: function(req, res, next) {

    postModel.findByIdAndUpdate(req.params.postId, {
      title: req.body.title,
      subTitle: req.body.subTitle,
      content: req.body.content,
      categories: req.body.categories,
      tags: req.body.tagsId,
      updatedAt: Date.now(),
    }, function(err, postInfo) {
      if (err)
        next(err);
      else {
        res.json({
          status: 'success',
          message: 'post updated successfully!!!',
          data: null,
        });
      }
    });
  },
  deleteById: function(req, res, next) {
    postModel.findByIdAndRemove(req.params.postId, function(err, postInfo) {
      if (err)
        next(err);
      else {
        res.json({
          status: 'success',
          message: 'post deleted successfully!!!',
          data: null,
        });
      }
    });
  },
  create: function(req, res, next) {
    console.log(req.body.userId);
    console.log(req.headers);

    console.log(JSON.stringify(req.body, null, 2));
    //    toLocaleRequest({
    //      model: "post",
    //      request: req.body,
    //      params: [
    //       "title",
    //       "subTitle",
    //       "userId",
    //       "content",
    //       "categories",
    //       "tags"
    //      ]
    //    }).then(result => {
    //      res.json(result);
    //      console.log(result);
    //    }).catch(err => {
    //      res.json(err);
    //      console.log(err);
    //    });
    let newPost = new postModel({
      title: req.body.title,
      subTitle: req.body.subTitle,
      userId: req.body.userId,
      content: req.body.content,
      slug: req.body.slug,
      categories: req.body.categories,
      tags: req.body.tags,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      deletedAt: null
    });

    newPost.save(function(err) {
      if (err) return console.log(err);
      console.log(`postadded successfully!!!`);
      res.json({
        status: 'success',
        message: 'post added successfully!!!',
        data: null,
      });
    });

    // postModel.create({
    //   title: req.body.title,
    //   subTitle: req.body.subTitle,
    //   userId: req.body.userId,
    //   content: req.body.content,
    //   slug: req.body.slug,
    //   categories: req.body.categories,
    //   tags: req.body.tags,
    //   createdAt: Date.now(),
    //   updatedAt: Date.now(),
    //   deletedAt: null,
    // }, function(err, result) {
    //   if (err)
    //     next(err);
    //   else
    //     res.json({
    //       status: 'success',
    //       message: 'post added successfully!!!',
    //       data: null,
    //     });
    //
    // });
  },
};
