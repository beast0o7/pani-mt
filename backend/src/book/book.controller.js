const response = require('../../utils/response');
const bookService = require('./book.service');

exports.getBook = async (req, res) => {
    const { skip, limit, author, publication_year, search } = req.query;

    const result = await bookService.fetchBook({ skip, limit, author, publication_year, search });
    if (!result.error) {
        return response.ok(res, result);
    } else {
        return response.noData(res, result);
    }
}

exports.addBook = async (req, res) => {
    const { title, author, publication_year } = req.body;
    let userId = req.userData.id;
    console.log(userId)
    const bookData = { title, author, publication_year, userId };
    const result = await bookService.insertBook(bookData);
    if (!result.error) {
        return response.created(res, result);
    } else {
        return response.unprocessableEntity(res, result);
    }
}

exports.updateBookById = async (req, res) => {
    const { id: _id } = req.params;
    let userId = req.userData.id;
    const { title, author, publication_year } = req.body;
    const bookData = { _id, title, author, publication_year, userId };
    const result = await bookService.modifyBookById(bookData);
    if (!result.error) {
        return response.ok(res, result);
    } else {
        return response.noData(res, result);
    }
}

exports.removeBookById = async (req, res) => {
    const { id } = req.params;
    const result = await bookService.deleteBookById(id);
    if (!result.error) {
        return response.ok(res, result);
    } else {
        return response.noData(res, result);
    }
}

exports.insertbooks = async (req, res) => {
    try {
        const result = await bookService.bulkInsert();
        if (!result.error) {
            return response.created(res, result);
        } else {
            return response.unprocessableEntity(res, result);
        }
    } catch (error) {
        console.error('An error occurred:', error);
        return response.noData(res, error);
    }
};
