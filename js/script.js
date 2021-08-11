/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

let booksArray = [];
if (localStorage.myBooks != null) {
  booksArray = JSON.parse(localStorage.myBooks);
}

const title = document.getElementById('title');
const author = document.getElementById('author');

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

  deleteBook = (title, name) => {
    for (let i = 0; i < this.array.length; i += 1) {
      if (this.array[i].title === title && this.array[i].author === name) {
        this.array.splice(i, 1);
      }
    }
    this.updateStorage();
    renderBook();
  };
}

function myFunction() {
  return false;
}
