const count = document.querySelector("#center-number");
const buttons = document.querySelector(".button-container");

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
    setColor();
  }
  if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
    setColor();
  }
  if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
    setColor();
  }
});

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = "#5b9ee7";
  } else if (count.innerHTML < 0) {
    count.style.color = "#ea4343";
  } else {
    count.style.color = "black";
  }
}
