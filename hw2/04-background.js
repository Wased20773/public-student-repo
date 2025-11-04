// Add your code here
const button = document.querySelector("input[type='button']");
const input = document.querySelector("input");
const bodyBackground = document.querySelector("body");
let intervalId;
const defaultIntervalTime = 3000;

const getValidInterval = () => {
  const value = input.value.trim();
  const num = parseInt(value, 10);

  if (isNaN(num)) {
    return defaultIntervalTime;
  }
  return num * 1000;
};

const handleButton = function ChangeBackgroundToIntervalOrContinue(event) {
  const value = event.target.value;

  // test logs
  console.log(button);
  console.log(input.value);

  // prevents multiple intervals from occuring
  clearInterval(intervalId);
  intervalId = null;

  /* --- FIXED BACKGROUND CHANGING CONFUSION --- */
  // Begin changing background
  if (value === "Start") {
    button.value = "Stop";
    button.className = "btn-danger rounded px-2 py-1 mt-3";

    intervalId = setInterval(alternateColors, getValidInterval());
  }
  // Stop background changing
  else {
    button.value = "Start";
    button.className = "btn-primary rounded px-2 py-1 mt-3";
    clearInterval(intervalId);
    intervalId = null;
  }
  /* -------------------------------------------- */
};

const alternateColors = function AlternateColorsForWindowBackground(event) {
  // generate random color of half opacity
  const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, 0.5)`;

  bodyBackground.style.background = randomColor;
};

// run default attributes on page load
const onload = function ChangeToDefaultValuesOnPageLoad() {
  button.value = "Stop";
  button.className = "btn-danger rounded px-2 py-1 mt-3";
  input.value = 3;

  clearInterval(intervalId);
  intervalId = null;
  intervalId = setInterval(alternateColors, defaultIntervalTime);
};

// update interval speed when updating the input field
input.addEventListener("input", (event) => {
  if (button.value === "Stop" && event.target.value > 0) {
    clearInterval(intervalId);
    intervalId = null;
    intervalId = setInterval(alternateColors, getValidInterval());
  } else if (Number(input.value) === 0) {
    input.value = 3;

    // We still have to set the interval back to default!
    clearInterval(intervalId);
    intervalId = null;
    intervalId = setInterval(alternateColors, getValidInterval());
  }
});

window.addEventListener("load", onload);
button.addEventListener("click", handleButton);
