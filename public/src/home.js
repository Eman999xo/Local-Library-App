function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
    let count = 0 
    let item = books.forEach(book => book.borrows.forEach(borrow => borrow.returned === false ? count++ : count))
    return count
  }



 function getMostCommonGenres(books) {
   let book = {}
   books.forEach(item => book[item.genre] ? 
   book[item.genre]++ : 
   book[item.genre] = 1 
  )
   
  return Object.entries(book)
  .map(([name, count]) => {
   return { name,count }; })
  .sort((val1, val2) => val2.count - val1.count)
  .slice(0, 5);
}



function getMostPopularBooks(books) {
    const count = 0
    const borrows = books.map(book=>({name:book.title, count:book.borrows.length}));
    borrows.sort((val1,val2) => val2.count - val1.count);
    return borrows.slice(0,5);
}

//Helper function
function _showTopFive (arr) {
  arr.sort((elementA, elementB) => elementB.count - elementA.count);
  return arr.slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
let result = [];
authors.forEach((author) => {
  let refAuth = {
    name: `${author.name.first} ${author.name.last}`, count: 0
  };
  books.forEach((book) => {
  book.authorId === author.id ? refAuth.count += book.borrows.length : null;
  });
  result.push(refAuth);
});
//return result.sort((valA, valB) => valB.count - valA.count).slice(0 ,5);
return _showTopFive(result);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
