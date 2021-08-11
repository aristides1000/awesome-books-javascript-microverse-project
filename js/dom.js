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
    const card = document.createElement('tbody');

    const cardBody = document.createElement('tr');

    const title = document.createElement('td');
    // title.classList.add('bg-info')
    title.innerText = allBooks[i].title + "by " + allBooks[i].author;

    // const author = document.createElement('p');
    // author.innerText = allBooks[i].author;

    cardBody.appendChild(title);
    // cardBody.appendChild(author);

    const deletebtn = document.createElement('td')
    deletebtn.classList.add('any');
    const deleteCard = document.createElement('button');
    deleteCard.classList.add('btn', 'btn-warning')
    deleteCard.innerText = 'Delete';
    deleteCard.classList.add('mx-auto')
    deleteCard.addEventListener('click', (e) => {
      e.preventDefault();
      bookList.deleteBook(allBooks[i].title, allBooks[i].author);
    });
    deletebtn.appendChild(deleteCard)
    cardBody.appendChild(deletebtn);

    card.appendChild(cardBody);


    bookContainer.appendChild(card);
  }
}

submit.addEventListener('click', (e) => {
  e.preventDefault();
  bookList.addBook();
});
renderBook();
