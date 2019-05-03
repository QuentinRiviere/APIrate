const express = require('express');
const router = express.Router();
const userController = require('../../app/controllers/users');
router.get('/profile', userController.profile)
router.post('/update/linkedin/profile', userController.updateLinkedinProfile);

module.exports = router;
