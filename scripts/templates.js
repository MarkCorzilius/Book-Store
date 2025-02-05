function getDialogTemplate() {
  return `<content id="content" class="content">
        <div class="content_template">
        <h2 class="book_title">Atomic Habits</h2>
        <hr class="divider" />
        <div class="book_div">
          <img class="book" src="./assets/icons/bookIcon.png" alt="book" />
        </div>
        <hr class="divider" />
        <div class="book_info_section">
          <div class="price_and_likes">
            <div class="money_amount">24,99€</div>
            <div class="likes_and_amountOfIt">
              <span class="amount_of_likes">999</span>
              <img
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
              <p>: James Clear</p>
              <p>: 2018</p>
              <p>: Self-Help</p>
            </div>
          </div>
          <hr class="divider" />
        </div>
        <div class="overlay_bottom">
          <div class="title_and_comments">
            <h3 class="overlay_bottom_title">Comments:</h3>
            <div class="overlay_comments">
              <div class="users">
                <div>Mark</div>
              </div>
              <div class="messages">
                <p>good book</p>
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
}
