/* Task 1 - Complete the function according to the TODO */
function addComment(username, comment, addToStart) {
  const combinedComment = `@${username}: ${comment}`; // Combine username and comment with an @ sign
  if (addToStart) {
    //add to the top of the list
    comments.unshift(combinedComment);
  } else {
    //add to bottom of the list
    comments.push(combinedComment);
  }
}

/* Task 2 - Create your showWinnerMessage below according to the TODO */
function showWinnerMessage(message) {
  const winnerDisplay = document.getElementById("winner-display"); //finding an element on the page in HTML that has winner display
  winnerDisplay.innerHTML = message; // changes the HTML
}

/* Task 3 - Create your pickWinner below according to the TODO */
function pickWinner() {
  const randomIndex = Math.floor(Math.random() * comments.length);
  const winningEntry = comments[randomIndex];
  const message = `Winner: <strong class="text-success">${winningEntry}</strong>`;
  showWinnerMessage(message);
}

/* Task 4 - Complete the function according to the TODO */
function showRandomEmoji() {
  // Select the element with id "winner-emoji"
  const winnerEmoji = document.getElementById("winner-emoji");

  // Set the emoji you want to display (for example, a trophy emoji)
  const emoji = "🏆";

  // Update the element's content to show the emoji
  winnerEmoji.innerHTML = emoji;
}

/* Task 5 - Complete the function according to the TODO */
function reverseOrder() {}

/* Task 6 - Complete the function according to the TODO */
function removeComment(index) {}

/* Task 7 - Complete the function according to the TODO */
function filterEmojiComments() {}

/* Level Ups */

/* Level Up - Task 8 - Complete the filterList function according to the TODO */
function filterList(searchTerm, searchUsers) {}

/* Level Up - Task 9 - Compelte the task according to the TODO */

/* Level Up - Task 10 - Add to the `addComment` function so that the an `@` sign is added to the username if there is not already one before it gets pushed into the array.  */

// Get references to the winner display and emoji elements
const winnerDisplay = document.getElementById("winner-display");
const winnerEmoji = document.getElementById("winner-emoji");

// Function to get usernames from the site (for example, from a list or input fields)
function getUsernames() {
  // This example assumes usernames are in a list with class 'list-group-item'
  const items = document.querySelectorAll(".list-group-item");
  const usernames = [];
  items.forEach((item) => {
    usernames.push(item.textContent.trim());
  });
  return usernames;
}

// Function to pick a random emoji from the emojis array
function getRandomEmoji() {
  // Pick a random index from 0 to emojis.length - 1
  const randomIndex = Math.floor(Math.random() * emojis.length);
  // Return the emoji at that index
  return emojis[randomIndex];
}

// Function to pick a winner and update the display
function pickWinner() {
  // Get the current usernames from the site
  const usernames = getUsernames();

  // If there are no usernames, show a message and return
  if (usernames.length === 0) {
    winnerDisplay.innerHTML = "No usernames to pick from!";
    winnerEmoji.innerHTML = "";
    return;
  }

  // Pick a random winner from the usernames array
  const randomIndex = Math.floor(Math.random() * usernames.length);
  const winner = usernames[randomIndex];

  // Show the winner's name
  winnerDisplay.innerHTML = `🎉 The winner is: <span class="winner">${winner}</span>`;

  // Pick a random emoji from the emojis array and show it
  const emoji = getRandomEmoji();
  winnerEmoji.innerHTML = emoji;
}

// Add an event listener to the button
const pickWinnerBtn = document.getElementById("pick-winner-btn");
pickWinnerBtn.addEventListener("click", pickWinner);
