const calcStatus = document.querySelector(".status");
const powerButton = document.querySelector(".powerBtn");
const numbers = document.querySelectorAll(".number");
const digits = document.querySelector(".digits");
const operands = document.querySelectorAll(".operand");
const equals = document.querySelector("#equals");
const calcResult = document.querySelector(".result");
const ac = document.querySelector("#ac");
const c = document.querySelector("#c");
const sign = document.querySelector("#sign")
const comma = document.querySelector("#comma");

let num1 = '', num2 = '', plusMinus = "+", isCalcOn = false;
let result, operand;
powerButton.addEventListener("click", function () {
    if (isCalcOn == false) {
        calcStatus.style.backgroundColor = 'green';
        isCalcOn = true;
    } else {
        calcStatus.style.backgroundColor = 'red';
        AC();
        isCalcOn = false;
    }
});
numbers.forEach(number =>
    number.addEventListener('click', function () {
        if (isCalcOn == true) {
            if (operand == null && result != null) {
                result += number.textContent;
                digits.textContent = result;
            } else if (operand == null) {
                num1 += number.textContent;
                digits.textContent = num1;
            }
            else if (operand != null) {
                num2 += number.textContent;
                digits.textContent = `${num1} ${operand} ${num2}`;
            }
        } else window.alert("Turn on the calculator first");
    }
    ));
operands.forEach(element =>
    element.addEventListener("click", function () {
        if (isCalcOn == true && result != null) {
            operand = element.textContent;
            num1 = result;
            digits.textContent = `${num1} ${operand}`;
            num2 = '';
        }
        else if (isCalcOn == true && num1 != '') {
            operand = element.textContent;
            digits.textContent = `${num1} ${operand}`;
            num2 = '';
        }
    }));

equals.addEventListener("click", function () {
    if (num2 == 0 && num2 != '') {
        window.alert("You can't divide by 0!");
    }
    else if (operand != null && num1 != '' && num2 != '')
        switch (operand) {
            case "+": Add(num1, num2); calcResult.textContent = result; break;
            case "-": Subtract(num1, num2); calcResult.textContent = result; break;
            case "X": Multiply(num1, num2); calcResult.textContent = result; break;
            case "/": Divide(num1, num2); calcResult.textContent = result; break;
            default: window.alert("Error");
        }
});
ac.addEventListener("click", AC);
c.addEventListener("click", C);

sign.addEventListener("click", function () {
    if (operand == null && num1 != '') {
        if (plusMinus == "+") {
            num1 = `-${num1}`;
            digits.textContent = num1;
            plusMinus = "-"
        } else if (plusMinus == "-") {
            num1 = digits.textContent.substring(1);
            digits.textContent = num1;
            plusMinus = "+";
        }
    }
});
comma.addEventListener("click", function () {
    if (operand == null && num1.toString().includes('.') == false && result != null) {
        result += ".";
        digits.textContent = `${result}`
    }
    else if (operand == null && num1.toString().includes('.') == false) {
        num1 += ".";
        digits.textContent = `${num1}`
    }
    else if (operand != null && num2.toString().includes('.') == false) {
        num2 += ".";
        digits.textContent = `${num1} ${operand} ${num2}`;
    }
});

function Add(number1, number2) {
    result = Math.round((parseFloat(number1) + parseFloat(number2)) * 100) / 100;
    num1 = '';
    num2 = '';
    operand = null;
    plusMinus = "+";
    return result;
}
function Subtract(number1, number2) {
    result = Math.round((parseFloat(number1) - parseFloat(number2)) * 100) / 100;
    num1 = '';
    num2 = '';
    operand = null;
    plusMinus = "+";
    return result;
}
function Multiply(number1, number2) {
    result = Math.round((parseFloat(number1) * parseFloat(number2)) * 100) / 100;
    num1 = '';
    num2 = '';
    operand = null;
    plusMinus = "+";
    return result;
}
function Divide(number1, number2) {
    result = Math.round((parseFloat(number1) / parseFloat(number2)) * 100) / 100;
    num1 = '';
    num2 = '';
    operand = null;
    plusMinus = "+";
    return result;
}
function AC() {
    num1 = '';
    num2 = '';
    result = null;
    operand = null;
    digits.textContent = '';
    calcResult.textContent = '';
    plusMinus = "+";
}
function C() {
    if (operand != null && num2 != '') {
        num2 = num2.slice(0, -1);
        digits.textContent = `${num1} ${operand} ${num2}`;
    }
    else if (operand != null && num2 == '') {
        operand = null;
        digits.textContent = `${num1}`;
    }
    else if (operand == null && result == null) {
        num1 = num1.toString().slice(0, -1);
        digits.textContent = `${num1}`;
    }
    else if (operand == null && result != null) {
        result = result.toString().slice(0, -1);
        num1 = result;
        digits.textContent = `${num1}`;
    }
}