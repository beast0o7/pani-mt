const { validationResult } = require("express-validator");

exports.handleValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array)
        const errorMessages = errors.array().map(error => ({
            path: error.path,
            message: error.msg
        }));
        return res.status(400).json({ statusCode: 400, error: true, errors: errorMessages });
    };
    return next();
}  