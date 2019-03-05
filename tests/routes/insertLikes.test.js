const server = require('../../server');

describe('insertLikes route ', () => {
  it('it should return 200 when book like is successfully updated', async () => {
    const options = {
      method: 'PUT',
      url: '/book/like/10',
    };
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
  it('should return an object as a response', async () => {
    const options = {
      method: 'PUT',
      url: '/book/like/10',
    };
    const response = await server.inject(options);
    expect(typeof (response)).toEqual('object');
  });
});
