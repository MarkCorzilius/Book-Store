function getBooksTemplate(bookIndex) {
  let book = books[bookIndex];
  let comments = getCommentsTemplate(bookIndex);

  let bookTemplate = `<content id="content" class="content">
        <div class="content_template">
        <h2 class="book_title">${book.name}</h2>
        <hr class="divider" />
        <div class="book_div">
          <img class="book" src="./assets/icons/bookIcon.png" alt="book" />
        </div>
        <hr class="divider" />
        <div class="book_info_section">
          <div class="price_and_likes">
            <div class="money_amount">${book.price + " €"}</div>
            <div class="likes_and_amountOfIt">
              <span class="amount_of_likes">${book.likes}</span>
              <img id="likeIcon${bookIndex}" onclick="changeLikeIcon(${bookIndex})"
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
              ${comments.usersTemplate}
              </div>
              <div id='messages' class="messages">
              ${comments.messagesTemplate}
              </div>
            </div>
          </div>
          <div class="message_box">
            <input type="text" />
            <img
              class="airplane_button"
              src="./assets/icons/paperAirplaneButton.png"
              alt="send"
            />
          </div>
        </div>
      </div>
     </content>`;
  return bookTemplate;
}
