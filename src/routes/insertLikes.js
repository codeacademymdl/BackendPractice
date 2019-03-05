const Model = require('../../models');

module.exports = [{
  path: '/book/like/{id}/{bookLikeStatus}',
  method: 'PUT',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async (req, h) => {
    try {
      console.log(req.params);
      Model.books.likeBook(encodeURIComponent(req.params.id), encodeURIComponent(req.params.bookLikeStatus));
      return h.response({ message: 'Like updated!' }).code(200);
    } catch (error) {
      return h.response({ message: 'Error' }).code(500);
    }
  },
}];
