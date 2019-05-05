const jwt = require('jsonwebtoken');

let validateAdmin = (req, res, next) => {
  jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
    if (err) {
      res.json({
        status: "error",
        message: err.message,
        data: null
      });
    } else {
      if(decoded.role === 'admin') {
        req.body.userId = decoded.id;
        next();
      }else{
        res.json({
          status: "denied",
          message: "not allowed",
          data: null
        });
      }
    }
  });
};

module.exports = validateAdmin;