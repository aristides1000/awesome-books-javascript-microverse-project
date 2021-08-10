/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

let booksArray = [];
if (localStorage.myBooks != null) {
  booksArray = JSON.parse(localStorage.myBooks);
}

const title = document.getElementById('title');
const author = document.getElementById('author');

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function myFunction() {
  return false;
}

const updateStorage = () => {
  localStorage.myBooks = JSON.stringify(booksArray);
};

const addBook = () => {
  const newBook = new Book(title.value, author.value);
  booksArray.push(newBook);
  updateStorage();
  renderBook();
  title.value = '';
  author.value = '';
};

const deleteBook = (title, name) => {
  for (let i = 0; i < booksArray.length; i += 1) {
    if (booksArray[i].title === title && booksArray[i].author === name) {
      booksArray.splice(i, 1);
    }
  }
  updateStorage();
  renderBook();
};
