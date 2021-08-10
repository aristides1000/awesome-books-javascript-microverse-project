/* eslint-disable no-unused-vars */
let booksArray = [];
if (localStorage.myBooks != null){
  booksArray = JSON.parse(localStorage.myBooks);
}

const title = document.getElementById('title');
const author = document.getElementById('author');
// const  form

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function myFunction() {
  return false;
}

function renderBook() {
  const bookContainer = document.getElementById('booksContainer');
  bookContainer.innerHTML = '';
  for (let i = 0; i < booksArray.length; i += 1) {
    const card = document.createElement('div');

    const cardBody = document.createElement('div');

    const title = document.createElement('h3');
    title.innerText = booksArray[i].title;

    const author = document.createElement('p');
    author.innerText = booksArray[i].author;

    cardBody.appendChild(title);
    cardBody.appendChild(author);

    card.appendChild(cardBody);

    const deleteCard = document.createElement('button');
    deleteCard.innerText = 'Delete';

    cardBody.appendChild(deleteCard);

    bookContainer.appendChild(card);
  }
}

const addBook = () => {
  const newBook = new Book(title.value, author.value);
  booksArray.push(newBook);
  updateStorage();
  renderBook();
  title.value= ''
  author.value = ''
  console.log(booksArray)
};

const updateStorage = () => {
  localStorage.myBooks = JSON.stringify(booksArray);
}