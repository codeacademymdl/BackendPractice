const pingRoute = require('./ping');
const books = require('./books');
const insertBooks = require('./insertBooks');
const insertLikes = require('./insertLikes');

module.exports = [...pingRoute, ...books, ...insertBooks, ...insertLikes];
