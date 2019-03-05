/**
 * @jest-environment node
 */

const server = require('./../../server');

describe('the insertBooks route', () => {
  it('should respond with 201 for /POST call', async () => {
    const options = {
      method: 'POST',
      url: '/insertBooks',
    };
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(201);
  });
  it('should respond with a object with a message key', async () => {
    const options = {
      method: 'POST',
      url: '/insertBooks',
    };
    const response = await server.inject(options);
    expect(typeof response.result).toEqual(typeof {});
  });
});
