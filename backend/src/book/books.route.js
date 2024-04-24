const express = require('express');

const router = express.Router();
const bookController = require('./book.controller');
const { errorWrapper } = require('../../utils/error');
const checkAuth = require('../../middleware/checkAuth');
const { handleValidation } = require('../../middleware/handleValidation');
const { validateBody } = require('./book.validation');

router.post('/', checkAuth, validateBody, handleValidation, errorWrapper(bookController.addBook));
router.get('/', checkAuth, errorWrapper(bookController.getBook));
router.put('/:id', checkAuth, validateBody, handleValidation, errorWrapper(bookController.updateBookById));
router.delete('/:id', checkAuth, errorWrapper(bookController.removeBookById));

module.exports = router;
