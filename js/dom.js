/* eslint-disable no-undef */
/* eslint-disable no-loop-func */

function renderBook() {
  const bookContainer = document.getElementById('booksContainer');
  bookContainer.innerHTML = '';
  const allBooks = JSON.parse(localStorage.myBooks);
  for (let i = 0; i < allBooks.length; i += 1) {
    const card = document.createElement('div');

    const cardBody = document.createElement('div');

    const title = document.createElement('h3');
    title.innerText = allBooks[i].title;

    const author = document.createElement('p');
    author.innerText = allBooks[i].author;

    cardBody.appendChild(title);
    cardBody.appendChild(author);

    card.appendChild(cardBody);

    const deleteCard = document.createElement('button');
    deleteCard.innerText = 'Delete';
    deleteCard.addEventListener('click', (e) => {
      e.preventDefault();
      deleteBook(allBooks[i].title, allBooks[i].author);
    });

    cardBody.appendChild(deleteCard);

    bookContainer.appendChild(card);
  }
}

renderBook();
