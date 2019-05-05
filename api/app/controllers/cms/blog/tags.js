const tagModel = require(NAMESPACES.model.BlogTag);
module.exports = {
  getById: function(req, res, next) {
    console.log(req.body);
    let locale = req.param('locale') && CONFIG.locales.includes(req.param('locale')) ? req.param('locale') : CONFIG.default_locale;
    tagModel.findById(req.params.tagId, function(err, tag) {
      if (err) {
        next(err);
      } else {
        tag.setLanguage(locale);
        res.json({
          status: "success",
          message: "tag found!!!",
          data: {
            tag: {
              id: tag._id,
              name: tag.name
            }
          }
        });
      }
    });
  },
  getAll: function(req, res, next) {
    let tagsList = [];
    let locale = req.param('locale') && CONFIG.locales.includes(req.param('locale')) ? req.param('locale') : CONFIG.default_locale;
    tagModel.find({}, function(err, tags) {
      if (err) {
        next(err);
      } else {
        for (let tag of tags) {
          tag.setLanguage(locale);
          tagsList.push({
            id: tag._id,
            name: tag.name
          });
        }
        res.json({
          status: "success",
          message: "tags list found!!!",
          data: {
            tags: tagsList
          }
        });
      }
    });
  },
  updateById: function(req, res, next) {
    tagModel.findByIdAndUpdate(req.params.tagId, {
      name: req.body.tags
    }, function(err, tagInfo) {
      if (err)
        next(err);
      else {
        res.json({
          status: "success",
          message: "tag updated successfully!!!",
          data: null
        });
      }
    });
  },
  deleteById: function(req, res, next) {
    tagModel.findByIdAndRemove(req.params.tagId, function(err, tagInfo) {
      if (err)
        next(err);
      else {
        res.json({
          status: "success",
          message: "tag deleted successfully!!!",
          data: null
        });
      }
    });
  },
  create: function(req, res, next) {
    console.log(req.body.userId);
    tagModel.create({
      name: req.body.tags,
    }, function(err, result) {
      if (err)
        next(err);
      else
        res.json({
          status: "success",
          message: "tag added successfully!!!",
          data: null
        });

    });
  }
};
