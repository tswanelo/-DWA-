// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const dividend = Number(entries.get("dividend"));
  const divider = Number(entries.get("divider"));

  // Validation when values are missing or not numbers
  if (!Number.isFinite(dividend) || !Number.isFinite(divider)) {
    result.innerText = "Division not performed. Both values must be valid numbers. Try again.";
    console.error("Something critical went wrong. Please reload the page");
    console.trace(); // Log the call stack to the console
    return;
  }

  // An invalid division (divider equals 0) should log an error in the console
  if (divider === 0) {
    result.innerText = "Division not performed. Cannot divide by zero. Try again.";
    console.error("Division not performed. Invalid number provided.");
    return;
  }

  // Perform the division calculation
  const divisionResult = dividend / divider;

  // Check if the result is an integer or a decimal number
  if (Number.isInteger(divisionResult)) {
    result.innerText = divisionResult;
  } else {
    // Display the decimal result with two decimal places
    result.innerText = divisionResult.toFixed(2);
  }
});
