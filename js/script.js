/* eslint-disable no-unused-vars */
const booksArray = [];
const title = document.getElementById('title');
const author = document.getElementById('author');
// const  form

function Book(title, author) {
  this.title = title;
  this.author = author;
}

const addBook = () => {
  const newBook = new Book(title.value, author.value);
  booksArray.push(newBook);
};

function myFunction() {
  return false;
}
