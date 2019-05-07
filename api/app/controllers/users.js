const userModel = require(NAMESPACES.model.User);
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const linkedinAuth = require('./passport/linkedinAuth');
module.exports = {
  getAll: function(req, res, next) {
    let usersList = [];
    let locale = req.param('locale') && CONFIG.locales.includes(req.param('locale')) ? req.param('locale') : CONFIG.default_locale;
    let perPage = req.param('perPage') ? parseInt(req.param('perPage')) : parseInt(userModel.estimatedDocumentCount()),
      page = Math.max(0, req.param('page'));

    userModel.estimatedDocumentCount().exec(function(err, count) {
      let paginate = safePaginate({
        perPage: perPage,
        page: page,
        count: count
      })

      userModel.find({})
        .skip((paginate.perPage * paginate.page))
        .limit(paginate.perPage)
        .exec(function(err, users) {
          if (err) {
            next(err);
          } else {
            // Global function toLocaleDocument (location : api/core/functions/documents.js)
            toLocaleDocument({
              collection: users,
              locale: locale,
              populate: [],
              fields: [
                'id',
                'firstname',
                'lastname',
                'email',
                'createdAt',
                'updatedAt'
              ],
            }).then(result => {
              res.json({
                users: result,
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
  profile: function(req, res, next) {
    console.log(req.body.userId);
    userModel.findById(req.body.userId, function(err, userInfo) {
      if (err) {
        next(err);
      } else {
        if (userInfo == null) {
          res.json({
            status: "error",
            message: "User not in database",
            data: null
          });
        } else {
          res.json({
            status: "success",
            message: "Connected",
            data: {
              "lastname" : userInfo.lastname,
              "firstname" : userInfo.firstname,
              "email" : userInfo.email,
              "role" : userInfo.role
            }
          });
        }
      }
    });
  },
  updateLinkedinProfile: function(req, res, next) {
    console.log(req.body.userId);
      if(req.session.passport.user.provider === 'linkedin'){
        userModel.findByIdAndUpdate(req.body.userId, {
          linkedinProfile: req.session.passport.user._raw
        }, function(err, movieInfo) {
          if (err)
          next(err);
          else {
            res.json({
              status: "success",
              message: "Linkedin profile updated successfully!!!",
              data: null
            });
          }
        });
      }
  }
}
