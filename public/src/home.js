function getTotalBooksCount(books) {
    return books.length;
}

function getTotalAccountsCount(accounts) {
    return accounts.length;
}

function getBooksBorrowedCount(books) {
    let borrowedBooks = 0;
    for (const book of books) {
        for (const borrow of book.borrows) {
          if(!borrow.returned){
              borrowedBooks++;
          }
        }
    }
    return borrowedBooks;
}

function getMostCommonGenres(books) {
  let genres = [];
  let allgenres = [];
  // get genres
  for (const book of books) {
      if(!genres.includes(book.genre)){
          genres.push(book.genre);
      }
  }

  for(const genre of genres){
      allgenres.push({
          name: genre,
          count: books.filter(book => {return book.genre == genre}).length
      });
  }

  allgenres.sort((a,b) => b.count - a.count);
  return allgenres.slice(0,5);
}
 
 function getMostPopularBooks(books) {
  const bookBorrowCounts = books.map(book => ({ name: book.title, count: book.borrows.length }));
  bookBorrowCounts.sort((a, b) => b.count - a.count);
  return bookBorrowCounts.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  var authorBooks;
  var allauthors = [];
  for (const author of authors) {
      authorBooks = books.filter(book => {return book.authorId === author.id});
      allauthors.push({
        name: `${author.name.first} ${author.name.last}`, 
        count: authorBooks.map(book => {return book.borrows.length}).reduce((total, num) => {
          return total + num;
        }, 0) 
      });
  }
  allauthors.sort((a,b) => b.count - a.count);
  return allauthors.slice(0,5);
}
 

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
