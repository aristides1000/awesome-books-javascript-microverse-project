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
const myHome = document.getElementById('home');
const myContact = document.getElementById('myContact');
const contactNavLink = document.getElementById('contactNavLink');

const myNewbookLi = document.getElementById('newbookLi');
const myContactNavLinkLi = document.getElementById('contactNavLinkLi');

newBook.addEventListener('click', (e) => {
  e.preventDefault();
  myForm.classList.remove('d-none');
  newBook.classList.add('active');
  myList.classList.remove('active');
  myBookList.classList.add('d-none');
  contactNavLink.classList.remove('active');
  myContact.classList.add('d-none');
});

myList.addEventListener('click', (e) => {
  e.preventDefault();
  myList.classList.add('active');
  myForm.classList.add('d-none');
  myBookList.classList.remove('d-none');
  newBook.classList.remove('active');
  contactNavLink.classList.remove('active');
  myContact.classList.add('d-none');
});

myHome.addEventListener('click', (e) => {
  e.preventDefault();
  myList.classList.add('active');
  myForm.classList.add('d-none');
  myBookList.classList.remove('d-none');
  newBook.classList.remove('active');
  contactNavLink.classList.remove('active');
  myContact.classList.add('d-none');
});

contactNavLink.addEventListener('click', (e) => {
  e.preventDefault();
  contactNavLink.classList.add('active');
  myForm.classList.add('d-none');
  myList.classList.remove('active');
  myBookList.classList.add('d-none');
  newBook.classList.remove('active');
  myContact.classList.remove('d-none');
});

function myFunction(x) {
  if (x.matches) { // If media query matches
    myNewbookLi.classList.remove('border-3', 'border-start');
    myContactNavLinkLi.classList.remove('border-3', 'border-start');
  } else {
    myNewbookLi.classList.add('border-3', 'border-start');
    myContactNavLinkLi.classList.add('border-3', 'border-start');
  }
}

const x = window.matchMedia('(max-width: 992px)');
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

renderBook();
