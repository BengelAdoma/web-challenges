console.clear();

let operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const divideButton = document.querySelector('[data-js="divide"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const moduloButton = document.querySelector('[data-js="modulo"]');
const exponentButton = document.querySelector('[data-js="exponent"]');


// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/
let sum = 0;

addButton.addEventListener("click", () => {
sum = operand1+operand2;
   console.log("sum", sum);
  });
  subtractButton.addEventListener("click", () => {
 sum = operand1-operand2;
       console.log("sum", sum);
      });
      divideButton.addEventListener("click", () => {
      sum = operand1/operand2;
           console.log("sum", sum);
          });
          multiplyButton.addEventListener("click", () => {
             sum = operand1*operand2;
               console.log("sum", sum);
              });
              exponentButton.addEventListener("click", () => {
                sum = operand1**operand2;
                   console.log("sum", sum);
                  });
                  moduloButton.addEventListener("click", () => {
                  sum = operand1%operand2;
                       console.log("sum", sum);
                      });


// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--

// --^-- write your code here --^--
const updateAddButton= document.querySelector('[data-js="increase-by-one"]');
const updateSubtractButton = document.querySelector('[data-js="increase-by-five"]');
const updateoperandButton = document.querySelector('[data-js="decrease-by-one"]');
const updateDecreaseButton = document.querySelector('[data-js="decrease-by-five"]');
const updateModuloButton = document.querySelector('[data-js="multiply-by-two"]');
const updateExponentButton = document.querySelector('[data-js="divide-by-two"]');


updateAddButton.addEventListener("click", () => {
   
    operand1++;
       console.log("sum", operand1);
      });
updateSubtractButton.addEventListener("click", () => {
        operand1 = operand1 + 5;
           console.log("sum", operand1);
          });
updateoperandButton.addEventListener("click", () => {
             operand1= operand1 - 1;
               console.log("sum", operand1);
              });
updateDecreaseButton.addEventListener("click", () => {
    operand1 = operand1 - 5;
       console.log("sum", operand1);
      });
updateExponentButton.addEventListener("click", () => {
                     operand1 = operand1 / 2;
                       console.log("sum", operand1);
                      });
updateModuloButton.addEventListener("click", () => {
                     operand1 = operand1 * 2;
                          console.log("sum", operand1);
                         });