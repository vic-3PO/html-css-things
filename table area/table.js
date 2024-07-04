const nextBtn = document.querySelector(".nextBtn");
const backBtn = document.querySelector(".backBtn");
const firstForm = document.querySelector(".form.first");
const secondForm = document.querySelector(".form.second");

const personalCheckbox = document.querySelector("input[name='personal']");
const identityCheckbox = document.querySelector("input[name='identity']");
const addressCheckbox = document.querySelector("input[name='address']");
const familyCheckbox = document.querySelector("input[name='family']");

const personalDetails = document.querySelector(".details.personal");
const identityDetails = document.querySelector(".details.identity");
const addressDetails = document.querySelector(".details.address");
const familyDetails = document.querySelector(".details.family");

const toggleModalBtn = document.getElementById("toggleModalBtn");
const formSelectionModal = document.getElementById("formSelectionModal");

personalCheckbox.addEventListener("change", () => {
    personalDetails.style.display = personalCheckbox.checked ? "block" : "none";
});

identityCheckbox.addEventListener("change", () => {
    identityDetails.style.display = identityCheckbox.checked ? "block" : "none";
});

addressCheckbox.addEventListener("change", () => {
    addressDetails.style.display = addressCheckbox.checked ? "block" : "none";
});

familyCheckbox.addEventListener("change", () => {
    familyDetails.style.display = familyCheckbox.checked ? "block" : "none";
});

nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    firstForm.style.display = "none";
    secondForm.style.display = "block";
});

backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    secondForm.style.display = "none";
    firstForm.style.display = "block";
});

toggleModalBtn.addEventListener("click", () => {
    formSelectionModal.style.display = formSelectionModal.style.display === "block" ? "none" : "block";
});
