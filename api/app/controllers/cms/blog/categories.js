const categoryModel = require(process.env.BASE_PATH + '/app/models/blog/categories');
module.exports = {
  getById: function(req, res, next) {
    console.log(req.body);
    categoryModel.findById(req.params.categoryId, function(err, category) {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "success",
          message: "category found!!!",
          data: {
            category: category
          }
        });
      }
    });
  },
  getAll: function(req, res, next) {
    let categoriesList = [];
    categoryModel.find({}, function(err, categories) {
      if (err) {
        next(err);
      } else {
        for (let category of categories) {
          categoriesList.push({
            id: category._id,
            name: category.name
          });
        }
        res.json({
          status: "success",
          message: "categories list found!!!",
          data: {
            categories: categoriesList
          }
        });
      }
    });
  },
  updateById: function(req, res, next) {
    categoryModel.findByIdAndUpdate(req.params.categoryId, {
      name: req.body.categories
    }, function(err, categoryInfo) {
      if (err)
        next(err);
      else {
        res.json({
          status: "success",
          message: "category updated successfully!!!",
          data: null
        });
      }
    });
  },
  deleteById: function(req, res, next) {
    categoryModel.findByIdAndRemove(req.params.categoryId, function(err, categoryInfo) {
      if (err)
        next(err);
      else {
        res.json({
          status: "success",
          message: "category deleted successfully!!!",
          data: null
        });
      }
    });
  },
  create: function(req, res, next) {
    console.log(req.body.userId);
    categoryModel.create({
      name: req.body.categories,
    }, function(err, result) {
      if (err)
        next(err);
      else
        res.json({
          status: "success",
          message: "category added successfully!!!",
          data: null
        });

    });
  }
};
