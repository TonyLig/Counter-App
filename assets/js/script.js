const count = document.querySelector("#center-number");
const buttons = document.querySelectorAll(".btn");

let counter = 0;

create(buttons[0], "span", ["material-symbols-outlined"], "remove");
create(buttons[1], "span", ["material-symbols-sharp"], "restart_alt");
create(buttons[2], "span", ["material-symbols-outlined"], "add");

// logic
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

// creates dom elements
function create(parent, element, classes, text) {
  const el = document.createElement(element);
  classes.forEach((c) => el.classList.add(c));
  el.innerText = text;
  parent.appendChild(el);
}

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

// trying to use asynchronous programming
function playSound() {
  const audio = new Audio("assets/sounds/click.mp3");
  audio.currentTime = 0.0;
  audio.play();
  setTimeout(function () {
    audio.pause();
  }, 1000);
}
