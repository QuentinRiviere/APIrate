const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const linkedinAuth = require('./passport/linkedinAuth');
module.exports = {
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
