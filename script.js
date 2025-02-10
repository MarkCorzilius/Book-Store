function renderBooks() {
  let bookRef = document.getElementById("main_part");
  bookRef.innerHTML = "";

  for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
    bookRef.innerHTML += getBooksTemplate(bookIndex);
  }
}
