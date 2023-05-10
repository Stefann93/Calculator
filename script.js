const calcStatus = document.querySelector(".status");
const powerButton = document.querySelector(".powerBtn");
let num1,num2;
let isCalcOn = false;

powerButton.addEventListener("click", function () {
    if (isCalcOn == false && num1 == null) {
        calcStatus.style.backgroundColor = 'green';
        isCalcOn = true;
    } else {
        calcStatus.style.backgroundColor = 'red';
        isCalcOn = false;
    }
});

function Add(num1, num2) {
    return num1 + num2;
}
function Subtract(num1, num2) {
    return num1 - num2;
}
function Multiply(num1, num2) {
    return num1 * num2;
}
function Divide(num1, num2) {
    return num1 / num2;
}