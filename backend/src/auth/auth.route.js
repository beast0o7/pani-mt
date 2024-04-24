const express = require('express');

const router = express.Router();
const authController = require('./auth.controller');
const { errorWrapper } = require('../../utils/error');


router.post('/signup', errorWrapper(authController.signUp));

router.post('/signin', errorWrapper(authController.signIn));

module.exports = router;
