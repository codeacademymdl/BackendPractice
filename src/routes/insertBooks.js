const { getBooksRating } = require('../util/booksWithRating');
const Model = require('../../models');

module.exports = [{
  path: '/insertBooks',
  method: 'POST',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async (req, h) => {
    try {
      const library = await getBooksRating();
      console.log(library);
      library.forEach(async (book) => {
        await Model.books.generate(book.id, book.Name, book.Author, book.rating);
      });
      return h.response({ message: 'Data Inserted!!!' }).code(201);
    } catch (error) {
      return h.response({ errorMessage: 'Error!' }).code(500);
    }
  },
}];
