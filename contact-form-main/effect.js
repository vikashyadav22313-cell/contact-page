const inputField = document.querySelectorAll(".input-field");
const checkbox = document.querySelector("#checkbox");
const email = document.querySelector("#email-Address");
const checkError = document.querySelector(".check-error");
const button = document.querySelector(".btn");
const form = document.querySelector(".form-sub");
const success = document.querySelector(".message");
const radioError = document.querySelector(".radio-error");
const radioButtons = document.querySelectorAll('input[name="GeneralEnquiry"]');

button.addEventListener("click", (e) => {
  e.preventDefault();

  // --------- Text Input Validation ---------
  inputField.forEach((field) => {
    const errorSpan = field.nextElementSibling;

    if (field.value.trim() === "") {
      errorSpan.style.display = "block";
      field.style.border = "1px solid red";
    } else {
      errorSpan.style.display = "none";
      field.style.border = "1px solid hsl(186, 15%, 59%)";
    }

    field.addEventListener("input", () => {
      errorSpan.style.display = "none";
      field.style.border = "1px solid hsl(186, 15%, 59%)";
    });
  });

  // --------- Email Validation ---------
  const emailValid = email.value.trim();
  const emailError = email.nextElementSibling;

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValid);

  if (!isEmailValid) {
    emailError.style.display = "block";
    email.style.border = "1px solid red";
  } else {
    emailError.style.display = "none";
    email.style.border = "1px solid hsl(186, 15%, 59%)";
  }

  // --------- Checkbox Validation ---------
  const isCheckboxChecked = checkbox.checked;
  if (!isCheckboxChecked) {
    checkError.style.display = "block";
  } else {
    checkError.style.display = "none";
  }

  checkbox.addEventListener("click", () => {
    checkError.style.display = "none";
  });

  // --------- Radio Button Validation ---------
  const isRadioSelected = [...radioButtons].some(radio => radio.checked);

  if (!isRadioSelected) {
    radioError.style.display = "block";
  } else {
    radioError.style.display = "none";
  }

  // --------- FINAL CHECK: Show Success Message if All Valid ---------
  const allFieldsFilled = [...inputField].every(field => field.value.trim() !== "");

  if (allFieldsFilled && isEmailValid && isCheckboxChecked && isRadioSelected) {
    // ✅ Show success message
    success.style.display = "block";

    // Optional: reset form
    form.reset();

    // Optional: Scroll to message
    success.scrollIntoView({ behavior: "smooth" });

    // Optional: hide after 5 seconds
    setTimeout(() => {
      success.style.display = "none";
    }, 3000);
  } else {
    success.style.display = "none";
  }
});

// ✅ Hide radio error on change
radioButtons.forEach(radio => {
  radio.addEventListener("change", () => {
    radioError.style.display = "none";
  });
});
