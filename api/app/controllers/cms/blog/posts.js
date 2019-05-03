const postModel = require(process.env.BASE_PATH + '/app/models/blog/posts');
module.exports = {
  getById: function(req, res, next) {
    console.log(req.body);
    postModel.findById(req.params.postId, function(err, post) {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "success",
          message: "post found!!!",
          data: {
            post: post
          }
        });
      }
    }).populate('categories').populate('tags');
  },
  getAll: function(req, res, next) {
    let postsList = [];
    let perPage = req.param('perPage') ? parseInt(req.param('perPage')) : parseInt(postModel.count()),
      page = Math.max(0, req.param('page'));
    postModel.find({})
      .populate('categories')
      .populate('tags')
      .skip(perPage * page)
      .limit(perPage)
      .exec(function(err, posts) {
        if (err) {
          next(err);
        } else {
          postModel.countDocuments().exec(function(err, count) {
            for (let post of posts) {
              postsList.push({
                id: post._id,
                title: post.title,
                subTitle: post.subTitle,
                userId: post.userId,
                content: post.content,
                categories: post.categories ? post.categories : null,
                tags: post.tags ? post.tags : null,
                createdAt: post.createdAt,
                updatedAt: post.updatedAt,
                deletedAt: post.deletedAt
              });
            }
            res.json({
              posts: postsList,
              page: page,
              pages: Math.floor(count / perPage)
            })
          })
        }
      });
  },
  updateById: function(req, res, next) {
    postModel.findByIdAndUpdate(req.params.postId, {
      title: req.body.title,
      subTitle: req.body.subTitle,
      content: req.body.content,
      categories: req.body.categoryId,
      tags: req.body.tagsId,
      updatedAt: Date.now()
    }, function(err, postInfo) {
      if (err)
        next(err);
      else {
        res.json({
          status: "success",
          message: "post updated successfully!!!",
          data: null
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
          status: "success",
          message: "post deleted successfully!!!",
          data: null
        });
      }
    });
  },
  create: function(req, res, next) {
    console.log(req.body.userId);
    postModel.create({
      title: req.body.title,
      subTitle: req.body.subTitle,
      userId: req.body.userId,
      content: req.body.content,
      categories: req.body.categoryId,
      tags: req.body.tags,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      deletedAt: null
    }, function(err, result) {
      if (err)
        next(err);
      else
        res.json({
          status: "success",
          message: "post added successfully!!!",
          data: null
        });

    });
  }
};
