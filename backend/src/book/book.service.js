const { db } = require('../../models')
const { pagination } = require('../../pagination');

exports.fetchBook = async (query) => {
  const { skip, limit } = pagination(query.skip, query.limit);

  const { author, publication_year, search } = query;

  let mongoQuery = {};
  author ? mongoQuery.author = author : "";
  Number(publication_year) ? mongoQuery.publication_year = publication_year : "";
  search ? mongoQuery.title = { $regex: search, $options: 'i' } : "";

  const result = await db.book.find(mongoQuery).populate({ path: "createdBy", select: "username email" }).sort({ createdAt: -1 }).skip(skip).limit(limit);
  const count = await db.book.count(mongoQuery);

  if (result && result.length) {
    return { error: null, message: "Data Found", data: result, count: count }
  } else {
    return { error: true, message: "Data Not Found", data: result, count: count }
  }
}

exports.insertBook = async (bookData) => {
  const { title, author, publication_year, userId } = bookData;

  const result = await db.book.create({ title, author, publication_year, createdBy: userId });
  await db.user.findByIdAndUpdate(userId, { $addToSet: { books: result._id } });
  if (result) {
    return { error: null, message: "Data Inserted", data: result };
  } else {
    return { error: true, message: "Error while inserting data", data: null };
  }
}

exports.modifyBookById = async (bookData) => {
  const { _id, title, author, publication_year, userId } = bookData;
  const book = await db.book.findById(_id);
  console.log(userId, _id, book)

  if (!book) {
    return { error: true, message: "Book Not Found" };
  }

  book.title = title;
  book.author = author;
  book.publication_year = publication_year;
  book.save()

  return { error: null, data: book, message: "Book Details Updated!" };
  
}


exports.deleteBookById = async (id) => {
  const result = await db.book.deleteOne({ _id: id })
  if (result) {
    return { error: null, data: result, message: "Book Deleted" };
  } else {
    return { error: true, data: result, message: "Book Not found" };
  }
}

