console.clear();
const inputColor = document.querySelector('[data-js = "input-color"]');
const inputRadius = document.querySelector('[data-js = "input-radius"]');
const inputRotation = document.querySelector('[data-js = "input-rotation"]');
const boxElement =document.querySelector('[data-js = "box"]');


inputColor.addEventListener("input", () => {
    boxElement.style.backgroundColor = `hsl(${inputColor.value},50%, 50%)`;
});

inputRadius.addEventListener("input", () => {
    boxElement.style.borderRadius = `${inputRadius.value}%`;
});
inputRotation.addEventListener("input", () => {
    boxElement.style.transform = `rotate(${inputRotation.value}deg)`;
});