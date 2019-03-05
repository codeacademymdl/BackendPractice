const axios = require('axios');

const url1 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
const url2 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/';

const getAllBooks = async () => {
  const allBooks = await axios.get(url1);
  return allBooks.data.books;
};

const getRatingWithId = async (id) => {
  const rating = await axios.get(url2 + id);
  return rating.data;
};

const getBooksRating = async () => {
  const bookResult = await getAllBooks();
  const bookId = [];
  bookResult.forEach((element) => {
    bookId.push(element.id);
  });
  const bookRatingPromises = [];
  bookId.forEach(val => bookRatingPromises.push(getRatingWithId(val)));

  const rating = await axios.all(bookRatingPromises);
  //   console.log(rating);
  const library = bookResult.map((book, index) => Object.assign(book, rating[index]));
  //   console.log(library);
  return library;
};

const groupBooksByAuthor = async () => {
  const library = await getBooksRating();
  //   console.log(library);
  const groupedBooks = library.reduce((acc, val) => {
    if (acc[val.Author] === undefined) {
      acc[val.Author] = [val];
    } else {
      acc[val.Author].push(val);
    }
    return acc;
  }, {});
  return groupedBooks;
};

getBooksRating();
module.exports = {
  getAllBooks, getRatingWithId, getBooksRating, groupBooksByAuthor,
};
