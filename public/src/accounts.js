 function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}
   function sortAccountsByLastName(accounts) {
  accounts.sort(function(accountA, accountB) {
    let lastNameA = accountA.name;
    let lastNameB = accountB.name;

    // Check if name property is an object or a string
    if (typeof lastNameA === 'object') {
      lastNameA = lastNameA.last;
    }
    if (typeof lastNameB === 'object') {
      lastNameB = lastNameB.last;
    }

    // Split the last name and compare them
    const splitA = lastNameA.split(' ');
    const splitB = lastNameB.split(' ');
    const lastNameCompare = splitA[splitA.length - 1].localeCompare(splitB[splitB.length - 1]);

    // If last names are the same, compare first names
    if (lastNameCompare === 0) {
      const firstNameCompare = splitA[0].localeCompare(splitB[0]);
      return firstNameCompare;
    }

    return lastNameCompare;
  });

  return accounts;
} 

function getTotalNumberOfBorrows(account, books) {
    let total = 0;
    let acctId = account.id;

    for (const book of books) {
        for (const borrow of book.borrows) {
            if(borrow.id === acctId){
                total++;
            }
        }
    }

    return total;
}

function getAuthorById(id, authors){
    let theAuthor = null;
    for (const author of authors) {
        if(author.id === id){
            theAuthor = author;
            break;
        }
    }
    return theAuthor;
}

 
function getBooksPossessedByAccount(account, books, authors) {
    let acctId = account.id;
    let author;
    let resultBooks = [];

    for (const book of books) {
        for (const borrow of book.borrows) {
          if(borrow.id === acctId && !borrow.returned){
              author = getAuthorById(book.authorId, authors);
              book.author = author;
              resultBooks.push(book);
          }
        }
    }

    return resultBooks;
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
