// Add your code here
const userInput = document.querySelector("input[type='button']");
const userValue = document.querySelector("input[type='text']");

const handleClick = function SearchForDataInSearchBar(event) {
  console.log(userValue.value);
};

userInput.addEventListener("click", handleClick);
