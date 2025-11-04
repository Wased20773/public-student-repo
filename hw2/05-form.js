// Add your code here
const form = document.querySelector("form");
const fullNameInput = document.querySelector("input[id='fullname'");
const emailInput = document.querySelector("input[id='email'");
const regStatusSelect = document.querySelector("select[id='registration'");
const textAreaInput = document.querySelector("textarea");
const modal = document.getElementById("exampleModalLong");

const myModal = new bootstrap.Modal(modal);

const onclick = function SubmittingForm(event) {
  event.preventDefault();

  // grab all values from form
  const fullName = fullNameInput.value;
  const email = emailInput.value;
  const regStatus = regStatusSelect.value;
  const selectedCourses = [];
  document
    .querySelectorAll("input[name='course']:checked")
    .forEach((cb) => selectedCourses.push(cb.value));
  const textArea = document.querySelector("textarea").value;

  // grab modal elements
  const modalTitle = document.querySelector("h2[id='exampleModalLongTitle']");
  const modalBody = document.querySelector("div[id='modal-body']");

  // check for input to be filled
  if (!fullName || !email || !regStatus) {
    modalTitle.className = "modal-title text-danger";
    modalTitle.innerText = "Error";
    modalBody.innerHTML =
      "Please fill in Name, Email, and Registration Status before submitting.";

    myModal.show();
    return;
  }

  // test log
  console.log(fullName);
  console.log(email);
  console.log(regStatus);
  console.log(selectedCourses);
  console.log(textArea);

  // create elements
  const nameEle = document.createElement("div");
  const emailEle = document.createElement("div");
  const regStatusEle = document.createElement("div");
  const selectedCoursesEle = document.createElement("div");
  const textAreaEle = document.createElement("div");

  // reset modal body before adding
  modalTitle.className = "modal-title text-black";
  modalTitle.innerText = "User Input";
  modalBody.innerHTML = "";

  // Add class names
  nameEle.className = "d-flex flex-row gap-2";
  emailEle.className = "d-flex flex-row gap-2";
  regStatusEle.className = "d-flex flex-row gap-2";

  // Add context to each element
  nameEle.innerHTML = `
    <div class="fw-bold">Full name:</div>
    <div>${fullName}</div>
    `;

  emailEle.innerHTML = `
    <div class="fw-bold">Email:</div>
    <div>${email}</div>
    `;

  regStatusEle.innerHTML = `
    <div class="fw-bold">Registration status:</div>
    <div>${regStatus}</div>
    `;

  const coursesHTML =
    selectedCourses.length > 0
      ? `<ul>${selectedCourses.map((c) => `<li>${c}</li>`).join("")}</ul>`
      : `<div>None</div>`;
  selectedCoursesEle.innerHTML = `
    <div class="fw-bold">Selected courses:</div>
    ${coursesHTML}
  `;

  const textAreaHTML =
    textArea.length > 0 ? `<div>${textArea}</div>` : `<div>None</div>`;
  textAreaEle.innerHTML = `
    <div class="fw-bold">Anything else?</div>
    ${textAreaHTML}
    `;

  // append to modal body
  modalBody.appendChild(nameEle);
  modalBody.appendChild(emailEle);
  modalBody.appendChild(regStatusEle);
  modalBody.appendChild(selectedCoursesEle);
  modalBody.appendChild(textAreaEle);

  // show modal
  myModal.show();
};

// const onclick = function SubmittingForm(event) {

// on load empty the form (no default values)
const onload = function OnPageLoadResetFormInputToBeEmpty(event) {
  fullNameInput.value = "";
  emailInput.value = "";
  regStatusSelect.value = "";

  document
    .querySelectorAll("input[name='course']:checked")
    .forEach((cb) => (cb.checked = false));

  textAreaInput.value = "";
};

window.addEventListener("load", onload);
form.addEventListener("submit", onclick);
