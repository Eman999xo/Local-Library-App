function findAuthorById(authors, id) {
  return authors.find(item => item.id === id)
}

function findBookById(books, id) {
  return books.find(item => item.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const arr = [[], []]
  books.filter(item => item.borrows[0].returned === false ?  
    arr[0].push(item) : arr[1].push(item))
   
   return arr;
  }

function getBorrowersForBook(book, accounts) {

  const borrowers = book.borrows.map(borrower => {
  const account = accounts.find((account) => account.id === borrower.id);
      return {...borrower, ...account}


}) 
  return borrowers.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
