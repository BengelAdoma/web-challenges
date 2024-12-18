console.clear();
const switchElement = document.querySelector('[data-js="switch"]');
const firstInput = document.querySelector('[data-js="first-input"]');
const secondInput = document.querySelector('[data-js="second-input"]');

const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
  
});

lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
 
});

switchElement.addEventListener("click", () => {
  const holder = secondInput.value;
  secondInput.value = firstInput.value
  firstInput.value = holder;
  
});
