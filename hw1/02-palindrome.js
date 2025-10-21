const elem = document.querySelector("input");
const resultElem = document.getElementById("result");

const handleInput = function CheckIfInputIsPalindrome(event) {
  const value = event.target.value;

  // clear empty input
  if (!value) {
    resultElem.textContent = "";
    return;
  }

  // check if the value is a positive integer
  if (value >= 0) {
    // reverse the string
    const reversed = value.split("").reverse().join("");

    // check if its a palindrome
    if (reversed === value) {
      resultElem.textContent = "Yes, it's a palindrome!";
      resultElem.className = "text-success";
      return;
    } else if (!/^\d+$/.test(value)) {
      resultElem.textContent = "Please enter numbers only.";
      resultElem.className = "text-warning";
      return;
    } else {
      resultElem.textContent = "No, it's not a palindrome.";
      resultElem.className = "text-danger";
      return;
    }
  } else {
    resultElem.textContent = "Please enter a positive number";
    resultElem.className = "text-warning";
    return;
  }
};

elem.addEventListener("input", handleInput);
