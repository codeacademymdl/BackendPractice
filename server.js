const Hapi = require('hapi');
const routes = require('./src/routes');

const server = new Hapi.Server({
  port: 8080,
  host: '0.0.0.0',
});

server.route(routes);
if (!module.parent) {
  server.start();
}
console.log('Server running at port 8080');
module.exports = server;
