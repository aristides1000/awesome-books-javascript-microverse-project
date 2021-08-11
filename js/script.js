/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

let booksArray = [];
if (localStorage.myBooks != null) {
  booksArray = JSON.parse(localStorage.myBooks);
}

const title = document.getElementById('title');
const author = document.getElementById('author');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookList {
  constructor(array) {
    this.array = array;
  }

  updateStorage = () => {
    localStorage.myBooks = JSON.stringify(this.array);
  };

   addBook = () => {
    const newBook = new Book(title.value, author.value);
    this.array.push(newBook);
    this.updateStorage();
    renderBook();
    title.value = '';
    author.value = '';
  };
  
}

function myFunction() {
  return false;
}

const updateStorage = () => {
  localStorage.myBooks = JSON.stringify(booksArray);
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
