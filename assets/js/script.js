const count = document.querySelector("#center-number");
const buttons = document.querySelectorAll(".btn");

let counter = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("subtract")) {
      counter--;
    } else if (button.classList.contains("add")) {
      counter++;
    } else {
      counter = 0;
    }

    count.innerHTML = counter;
    setColor();
    playSound();
  });
});

// to change color
function setColor() {
  if (counter > 0) {
    count.style.color = "#5b9ee7";
  } else if (counter < 0) {
    count.style.color = "#ea4343";
  } else {
    count.style.color = "black";
  }
}

// add audio to try asynchronous programming
function playSound() {
  const audio = new Audio("assets/sounds/click.mp3");
  audio.currentTime = 0.0;
  audio.play();
  setTimeout(function () {
    audio.pause();
  }, 1000);
}
