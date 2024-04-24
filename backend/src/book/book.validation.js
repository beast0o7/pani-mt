const { body } = require('express-validator');

exports.validateBody = [
    body('title').exists().withMessage("Title is Required!"),
    body('author').exists().withMessage("Author is Required!"),
    body('publication_year').exists().withMessage("publication_year!").isNumeric().withMessage("Must be a Number!"),
]
