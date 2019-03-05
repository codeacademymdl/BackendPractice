const Model = require('../../models');
// console.log(Model);
describe('generate', () => {
  beforeEach(async () => {
    await Model.books.truncate();
  });
  it('should insert name and the rating in the table', async () => {
    await Model.books.generate(10, 'Harry Potter and the Half-Blood Prince', 'J.K Rowling', 4.5);
    expect(await Model.books.count()).toEqual(1);
  });
  it('should return zero when no value is inserted', async () => {
    expect(await Model.books.count()).toEqual(0);
  });
});

describe('bookLike', () => {
  it('should like the book with given id', async () => {
    const bookId = '10';
    const bookLike = await Model.books.likeBook(bookId);
    console.log(bookLike);
    expect(Array.isArray(bookLike)).toEqual(true);
  });
});
afterAll(() => {
  Model.books.sequelize.close();
});
