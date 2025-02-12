function saveToLocalStorage() {
  localStorage.setItem("library", JSON.stringify(books));
}

function getFromLocalStorage() {
  storedLibrary = JSON.parse(localStorage.getItem("library"));
  if (storedLibrary !== null) {
    books = storedLibrary;
  }
}
