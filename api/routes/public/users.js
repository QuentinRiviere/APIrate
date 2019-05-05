const express = require('express');
const router = express.Router();
const authController = require(NAMESPACES.controller.Auth);

router.post('/register', authController.register);
router.get('/authenticate', (req, res) => {
  console.log(req.cookies);
  console.log(req.body);
  res.json(req.body);
});

router.post('/authenticate', authController.authenticate);

module.exports = router;