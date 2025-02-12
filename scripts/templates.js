function getBooksTemplate(bookIndex) {
  let book = books[bookIndex];
  let booksTemplate = `<content id="content" class="content">
        <div class="content_template">
        <h2 class="book_title">${book.name}</h2>
        <hr class="divider" />
        <div class="book_div">
          <img class="book" src="./assets/icons/bookIcon.png" alt="book" />
        </div>
        <hr class="divider" />
        <div class="book_info_section">
          <div class="price_and_likes">
            <div class="money_amount">${book.price + "€"}</div>
            <div class="likes_and_amountOfIt">
              <span id="counter${bookIndex}" class="amount_of_likes" onclick="renderCounter(${bookIndex})">${
    book.likes
  }</span>
              <img id="likeIcon${bookIndex}" onclick="toggleLikeIcon(${bookIndex})"
                class="like_button"
                src="./assets/icons/likeIconNotUsed.png"
                alt="likes"
              />
            </div>
          </div>
          <div class="deep_infos">
            <div class="keys">
              <p>author</p>
              <p>published year</p>
              <p>genre</p>
            </div>
            <div class="values">
              <p>: ${book.author}</p>
              <p>: ${book.publishedYear}</p>
              <p>: ${book.genre}</p>
            </div>
          </div>
          <hr class="divider" />
        </div>
        <div class="overlay_bottom">
          <div class="title_and_comments">
            <h3 class="overlay_bottom_title">Comments:</h3>
            <div class="overlay_comments">
              <div id='users' class="users">
              ${getCommentsTemplate(bookIndex)}
            </div>
          </div>
          <div class="message_box">
            <input id="inputForMessage" type="text" />
            <img id='sendingButton' onclick="addComments()"
              class="airplane_button"
              src="./assets/icons/paperAirplaneButton.png"
              alt="send"
            />
          </div>
        </div>
      </div>
     </content>`;
  return booksTemplate;
}

function getCommentsTemplate(bookIndex) {
  let book = books[bookIndex];
  let commentTemplate = "";

  for (
    let commentIndex = 0;
    commentIndex < book.comments.length;
    commentIndex++
  ) {
    let comment = book.comments[commentIndex];
    commentTemplate += `<div class="comment_and_user"> <strong class="users_template">${
      "[" + comment.name + "]"
    }</strong> <p class="messages_template">${comment.comment}</p></div>`;
  }
  return commentTemplate;
}
