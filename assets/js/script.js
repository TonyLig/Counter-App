const count = document.querySelector("#center-number");
const buttons = document.querySelectorAll(".btn");
const subtractIcon = document.createElement("span");
const restartIcon = document.createElement("span");
const addIcon = document.createElement("span");

subtractIcon.classList.add("material-symbols-outlined");
subtractIcon.innerText = "remove";
restartIcon.classList.add("material-symbols-sharp");
restartIcon.innerText = "restart_alt";
addIcon.classList.add("material-symbols-outlined");
addIcon.innerText = "add";

let counter = 0;

buttons[0].appendChild(subtractIcon);
buttons[1].appendChild(restartIcon);
buttons[2].appendChild(addIcon);

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
