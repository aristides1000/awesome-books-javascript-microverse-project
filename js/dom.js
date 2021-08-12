/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
let allBooks;
if (localStorage.myBooks != null) {
  allBooks = JSON.parse(localStorage.myBooks);
} else {
  allBooks = [];
}

const bookList = new BookList(allBooks);
function renderBook() {
  const bookContainer = document.getElementById('booksContainer');
  bookContainer.innerHTML = '';

  for (let i = 0; i < allBooks.length; i += 1) {
    const cardBody = document.createElement('tr');

    const title = document.createElement('td');
    title.classList.add('ms-4', 'fs-5');
    const spanelm = document.createElement('span');
    spanelm.classList.add('ms-3');
    spanelm.innerText = `"${allBooks[i].title}" by ${allBooks[i].author}`;
    title.appendChild(spanelm);

    cardBody.appendChild(title);

    const deletebtn = document.createElement('td');
    deletebtn.classList.add('d-flex');
    const deleteCard = document.createElement('button');
    deleteCard.classList.add('btn', 'btn-warning', 'fs-5');
    deleteCard.innerText = 'Delete';
    deleteCard.classList.add('mx-auto');
    deleteCard.addEventListener('click', (e) => {
      e.preventDefault();
      bookList.deleteBook(allBooks[i].title, allBooks[i].author);
    });
    deletebtn.appendChild(deleteCard);
    cardBody.appendChild(deletebtn);

    bookContainer.appendChild(cardBody);
  }
}

submit.addEventListener('click', (e) => {
  e.preventDefault();
  bookList.addBook();
});
const newBook = document.getElementById('newbook');
const myForm = document.getElementById('myForm');
const myBookList = document.getElementById('bookList');
const myList = document.getElementById('list');

newBook.addEventListener('click', (e) => {
  e.preventDefault();
  myForm.classList.remove('d-none');
  newBook.classList.add('active');
  myList.classList.remove('active');
  myBookList.classList.add('d-none');
});

myList.addEventListener('click', (e) => {
  e.preventDefault();
  myList.classList.add('active');
  myForm.classList.add('d-none');
  myBookList.classList.remove('d-none');
  newBook.classList.remove('active');
});
renderBook();
