/**
 * @jest-environment node
 */

const server = require('../../server');

describe('books route', () => {
  it('should respond with 200 for /GET call', async () => {
    const options = {
      method: 'GET',
      url: '/books',
    };
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
});
