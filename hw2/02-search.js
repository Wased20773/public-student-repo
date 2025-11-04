// Add your code here
const userInput = document.querySelector("input[type='button']");
const searchInput = document.querySelector("input[type='text']");
const resultsSection = document.getElementById("results");
const resultCount = document.getElementById("result-count");

const handleClick = function SearchForDataInSearchBar(event) {
  const value = searchInput.value;
  console.log(value);

  // remove cards and text
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => card.remove());
  resultsSection.textContent = "";

  // check if value is empty
  if (value.length === 0) {
    resultCount.textContent = "Nothing was searched";
    return;
  }

  // search for character
  let foundMatch = false;
  let countMatch = 0;
  characters.forEach((char) => {
    // show results if there was a match
    if (char.name.toLowerCase().includes(value.toLowerCase())) {
      foundMatch = true;
      countMatch += 1;

      // create card
      const card = document.createElement("div");
      const cardBody = document.createElement("div");
      const cardBodyName = document.createElement("h2");
      const cardBodyBirth = document.createElement("p");

      // add class
      card.className = "card";
      card.style.width = "225px";
      cardBody.className = "card-body text-center";

      // add highlight of search
      const start = char.name.toLowerCase().indexOf(value.toLowerCase());
      const end = start + value.length;

      const beforeMatch = char.name.slice(0, start);
      const matchText = char.name.slice(start, end);
      const endMatch = char.name.slice(end);

      const searchWithHighlight = `
      ${beforeMatch}<span style="background-color: yellow">${matchText}</span>${endMatch}
    `;

      // add content
      cardBodyName.innerHTML = searchWithHighlight;
      cardBodyBirth.textContent = `Birth year: ${char.birth_year}`;

      cardBody.appendChild(cardBodyName);
      cardBody.appendChild(cardBodyBirth);
      card.appendChild(cardBody);
      resultsSection.appendChild(card);
    }
  });
  if (!foundMatch) {
    resultCount.innerHTML = `Sorry, no results for <span style="color: blue">"${value.toLowerCase()}"</span>`;
  } else {
    const label = countMatch === 1 ? "result" : "results";
    resultCount.innerHTML = `${countMatch} ${label} for <span style="color: blue">"${value}"</span>`;
  }
};

const isEnter = function CheckIfUserPressedTheEnterKey(event) {
  if (event.key === "Enter") handleClick();
};
userInput.addEventListener("click", handleClick);
searchInput.addEventListener("keydown", isEnter);
