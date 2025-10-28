// Add your code here
const button = document.querySelector("input[type='button']");
const input = document.querySelector("input");
const bodyBackground = document.querySelector("body");
let intervalId;
const defaultIntervalTime = 3000;

const handleButton = function ChangeBackgroundToIntervalOrContinue(event) {
  const value = event.target.value;

  // test logs
  console.log(button);
  console.log(input.value);

  clearInterval(intervalId);
  intervalId = null;

  // Go back to user defined interval
  if (value === "Start") {
    button.value = "Stop";
    button.className = "btn-danger rounded px-2 py-1 mt-3";

    intervalId = setInterval(alternateColors, input.value * 1000);
  }
  // Go back to default defined interval
  else {
    button.value = "Start";
    button.className = "btn-primary rounded px-2 py-1 mt-3";
    intervalId = setInterval(alternateColors, defaultIntervalTime);
  }
};

const alternateColors = function AlternateColorsForWindowBackground(event) {
  const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, 0.5)`;

  bodyBackground.style.background = randomColor;
};

onload = (event) => {
  button.value = "Start";
  button.className = "btn-primary rounded px-2 py-1 mt-3";
  input.value = 1;

  clearInterval(intervalId);
  intervalId = null;
  intervalId = setInterval(alternateColors, defaultIntervalTime);
};

button.addEventListener("click", handleButton);
input.addEventListener("input", (event) => {
  console.log(input.value);

  if (button.value === "Stop") {
    clearInterval(intervalId);
    intervalId = null;
    intervalId = setInterval(alternateColors, input.value * 1000);
  }
});
addEventListener("load", onload);
