const express = require('express');

const router = express.Router();
const userController = require('./user.controller');
const { errorWrapper } = require('../../utils/error');
const checkAuth = require('../../middleware/checkAuth')

router.get('/', checkAuth, errorWrapper(userController.getUser));

module.exports = router;
