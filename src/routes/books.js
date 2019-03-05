const bookLibrary = require('../util/booksWithRating');

module.exports = [{
  path: '/books',
  method: 'GET',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async (request, h) => {
    const data = await bookLibrary.groupBooksByAuthor();
    return h.response(data).code(200);
  },
}];
