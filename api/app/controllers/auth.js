const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  register: function(req, res, next) {
    try {
      userModel.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
      }, function(err, result) {
        if (err) {
          console.log(err);
          next(err);
        } else {
          res.json({
            status: "success",
            message: "User added successfully!!!",
            data: null
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  authenticate: function(req, res, next) {
    userModel.findOne({
      email: req.body.email
    }, function(err, userInfo) {
      if (err) {
        next(err);
      } else {
        if (userInfo == null) {
          res.json({
            status: "error",
            message: "Invalid email !!!",
            data: null
          });
        } else {

          if (bcrypt.compareSync(req.body.password, userInfo.password)) {
            const token = jwt.sign({
              id: userInfo._id
            }, req.app.get('secretKey'), {
              expiresIn: process.env.JWT_EXIRE ? process.env.JWT_EXIRE : '1h'
            });

            userInfo.password = null;
            res.json({
              status: "success",
              message: "user found!!!",
              data: {
                user: userInfo,
                token: token
              }
            });
          } else {
            res.json({
              status: "error",
              message: "Invalid password!!!",
              data: null
            });
          }
        }
      }
    });
  }


}
