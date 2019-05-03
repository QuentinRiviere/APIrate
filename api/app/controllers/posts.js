const postModel = require('../models/posts');
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
    });
  },
  getAll: function(req, res, next) {
    let postsList = [];
    postModel.find({}, function(err, posts) {
      if (err) {
        next(err);
      } else {
        for (let post of posts) {
          postsList.push({
            id: post._id,
            title: post.title,
            subTitle: post.subTitle,
            userId: post.userId,
            content: post.content,
            createdAt: post.createdAt,
            updatedAt: post.updatedAt,
            deletedAt: post.deletedAt
          });
        }
        res.json({
          status: "success",
          message: "posts list found!!!",
          data: {
            posts: postsList
          }
        });
      }
    });
  },
  updateById: function(req, res, next) {
    postModel.findByIdAndUpdate(req.params.postId, {
      title: req.body.title,
      subTitle: req.body.subTitle,
      content: req.body.content,
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
