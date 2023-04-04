function findAuthorById(authors, id) {
  for (let i = 0; i < authors.length; i++) {
    if (authors[i].id === id) {
      return authors[i];
    }
  }
  return null; // if author not found
}

function findBookById(books, id) {
  for(let i = 0; i < books.length; i++) {
    if(books[i].id===id) {
      return books[i];
    }
  }
  return null;
}

function partitionBooksByBorrowedStatus(books) { 
  const borrowed = [];
  const available = [];
  books.forEach(book => {
    const [mostRecent] = book.borrows;
    if (mostRecent.returned) {
      available.push(book);
    } else {
      borrowed.push(book);
    }
  });
  return [borrowed, available];
} 

 function getBorrowersForBook(book, accounts) {
  const borrows = book.borrows;
  const result = borrows.map(borrow => {
    const account = accounts.find(account => account.id === borrow.id);
    return {
      ...borrow,
      ...account,
    };
  });
  return result.slice(0, 10); // return only 10 results
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
