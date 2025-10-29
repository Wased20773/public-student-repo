// Add your code here
const input = document.querySelector("input");
const textSection = document.getElementById("text-section"); // select the text section
const originalText = textSection.innerHTML; // preserve real formatting

// split tokens but keep whitespace in array
const tokens = originalText.split(/(\s+)/);

const handleInput = function CheckForAnyMatchingStringInsideText(event) {
  const value = event.target.value.toLowerCase();

  if (value.length === 0) {
    textSection.innerHTML = originalText;
    return;
  }

  let countMatch = 0;

  const highlighted = tokens.map((token) => {
    const lower = token.toLowerCase();
    if (lower.trim() === "") return token; // doesn't include whitespace

    // remove punctuation for matching but keep copy of original
    const cleaned = lower.replace(/[.,!?;:"()]/g, "").replace(/-/g, " ");

    const subwords = cleaned.split(" ").filter(Boolean);

    // check for full word match
    if (!subwords.includes(value)) {
      return token;
    }

    // highlight exact substring inside the token
    const index = lower.indexOf(value);
    if (index === -1) return token;

    countMatch += 1;

    // split the token into three parts
    // before match, exact substring match, and after match
    // then rebuild token with the highlighted match in place
    const before = token.slice(0, index);
    const match = token.slice(index, index + value.length);
    const after = token.slice(index + value.length);

    return `${before}<span style="background: yellow">${match}</span>${after}`;
  });

  // log match count
  console.log(`${countMatch} matches found`);

  textSection.innerHTML = highlighted.join("");
};

input.addEventListener("input", handleInput);
