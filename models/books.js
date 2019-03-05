module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define('books', {
    Author: DataTypes.STRING,
    bookid: {
      type: DataTypes.STRING,
      unique: true,
    },
    name: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    like: DataTypes.BOOLEAN,

  }, {});
    //   books.associate = function(models) {
    //     // associations can be defined here
    //   };

  books.generate = (bookid, name, author, rating) => books.create({
    bookid, name, Author: author, rating,
  }).catch((err) => {
    console.log(err);
  });

  //   books.likeBook = id => books.update({ like: 1 }, { where: { bookid: id } });
  books.likeBook = (id, bookLikeStatus) => {
    // console.log('bookLi', bookLikeStatus);

    if (bookLikeStatus === '0') {
      books.update({ like: 0 }, { where: { bookid: id } });
    } else if (bookLikeStatus === '1') {
    //   console.log('hi');
      books.update({ like: 1 }, { where: { bookid: id } });
    }
  };

  return books;
};
