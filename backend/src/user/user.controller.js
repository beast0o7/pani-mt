const response = require('../../utils/response');
const { db } = require('../../models');

exports.getUser = async (req, res) => {
    const { skip, limit } = req.query;

    const result = await db.user.aggregate([
        {
            $lookup: {
                from: 'books',
                localField: '_id',
                foreignField: 'createdBy',
                as: 'books'
            }
        },
        {
            $project: {
                _id: 1,
                username: 1,
                email: 1,
                books: 1
            }
        }
    ]).exec();
    console.log(result)

    if (!result.error) {
        return response.ok(res, result);
    } else {
        return response.noData(res, result);
    }
}