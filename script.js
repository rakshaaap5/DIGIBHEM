let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById("userGuess");
  const guess = parseInt(guessInput.value);
  const messageEl = document.getElementById("message");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    messageEl.innerHTML = "Please enter a valid number (1–100)";
    messageEl.style.color = "red";
  } else {
    attempts++;
    if (guess === randomNumber) {
      messageEl.innerHTML = `🎉 Correct! It was ${randomNumber}. Attempts: ${attempts}`;
      messageEl.className = "message success";
    } else if (guess < randomNumber) {
      messageEl.innerHTML = "Too low! Try again.";
      messageEl.className = "message";
    } else {
      messageEl.innerHTML = "Too high! Try again.";
      messageEl.className = "message";
    }
  }

  guessInput.value = "";
}

// Allow Enter key to submit
document.getElementById("userGuess").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});

// ✅ Reset game
function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("userGuess").value = "";
  const messageEl = document.getElementById("message");
  messageEl.innerHTML = "";
  messageEl.className = "message";
}
