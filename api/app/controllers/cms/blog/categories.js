const categoryModel = require(NAMESPACES.model.BlogCategory);
module.exports = {
  getById: function(req, res, next) {
    let locale = req.param('locale') && CONFIG.locales.includes(req.param('locale')) ? req.param('locale') : CONFIG.default_locale;
    console.log(req.body);
    categoryModel.findById(req.params.categoryId, function(err, category) {
      if (err) {
        next(err);
      } else {
        category.setLanguage(locale);
        res.json({
          status: "success",
          message: "category found!!!",
          data: {
            category: {
              id: category._id,
              name: category.name
            }
          }
        });
      }
    });
  },
  getAll: function(req, res, next) {
    let categoriesList = [];
    let locale = req.param('locale') && CONFIG.locales.includes(req.param('locale')) ? req.param('locale') : CONFIG.default_locale;
    categoryModel.find({}, function(err, categories) {
      if (err) {
        next(err);
      } else {
        for (let category of categories) {
          category.setLanguage(locale);
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
      name: req.body.name
    }, function(err, categoryInfo) {
      if (err)
        next(err);
      else {
        res.json({
          status: "success",
          message: "category updated successfully!!!",
          data: categoryInfo
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
          data: categoryInfo
        });
      }
    });
  },
  create: function(req, res, next) {
    console.log(req.body.userId);
    categoryModel.create({
      name: req.body.name,
    }, function(err, result) {
      if (err)
        next(err);
      else
        res.json({
          status: "success",
          message: "category added successfully!!!",
          data: result
        });

    });
  }
};
