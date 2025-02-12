function renderBooks() {
  let bookRef = document.getElementById("main_part");
  bookRef.innerHTML = "";

  for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
    bookRef.innerHTML += getBooksTemplate(bookIndex);
  }
}

// Render counter
function renderCounter(bookIndex) {
  let counterRef = document.getElementById("counter" + bookIndex);
  counterRef.innerHTML = "";

  counterRef.innerHTML = `${books[bookIndex].likes}`;
}

// change counter
function toggleLike(bookIndex) {
  let book = books[bookIndex];

  book.liked ? book.likes++ : book.likes--;
}

// Change like icon
function toggleLikeIcon(bookIndex) {
  let book = books[bookIndex];
  let likeIcon = document.getElementById("likeIcon" + bookIndex);
  book.liked
    ? (likeIcon.src = `./assets/icons/likeIconNotUsed.png`)
    : (likeIcon.src = `./assets/icons/likeIconUsed.png`);

  book.liked = !book.liked;

  toggleLike(bookIndex);
  renderCounter(bookIndex);
}
