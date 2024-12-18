// Task 1: Copy

const firstCopyInput = document.querySelector("[data-js=first-copy-input]");
const secondCopyInput = document.querySelector("[data-js=second-copy-input]");
const copyButton = document.querySelector("[data-js=copy-button]");


copyButton.addEventListener("click", () => {
  secondCopyInput.value = firstCopyInput.value;
});
// --v-- Write your code here --v--

// --^-- End of Task 1 --^--

// Task 2: Copy and Uppercase

const firstCopyInUppercaseInput = document.querySelector(
  "[data-js=first-copy-uppercase-input]"
);
const secondCopyInUppercaseInput = document.querySelector(
  "[data-js=second-copy-uppercase-input]"
);
const copyInUppercaseButton = document.querySelector(
  "[data-js=copy-uppercase-button]"
);

copyInUppercaseButton.addEventListener("click", () => {
  secondCopyInUppercaseInput.value = firstCopyInUppercaseInput.value.toUpperCase();
});
// --v-- Write your code here --v--

// --^-- End of Task 2 --^--

// Task 3: Switch Values

const firstSwitchValueInput = document.querySelector(
  "[data-js=first-switch-value-input]"
);
const secondSwitchValueInput = document.querySelector(
  "[data-js=second-switch-value-input]"
);
const switchValueButton = document.querySelector(
  "[data-js=switch-value-button]"
);


switchValueButton.addEventListener("click", () => {
const holder = secondSwitchValueInput.value;
secondSwitchValueInput.value = firstSwitchValueInput.value;
firstSwitchValueInput.value = holder;
});
// --v-- Write your code here --v--

// --^-- End of Task 3 --^--
