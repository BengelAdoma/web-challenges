console.clear();
const firstInput= document.querySelector('[data-js="first-input"]');
const buttonElement= document.querySelector('[data-js="button-uppercase"]');
buttonElement.addEventListener("click", () => {
    const oldValue = firstInput.value;
    const newValue = oldValue.toUpperCase();
    firstInput.value = newValue;
  });
