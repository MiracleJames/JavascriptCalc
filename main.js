let num1 = parseFloat(prompt("Enter num1:"));
let num2 = parseFloat(prompt("Enter num2:"));

let operator = prompt("Enter operator(+,-,/,*)");
let result = 0;
if (isNaN(num1) || isNaN(num2)) {
  alert("Fill in both feilds");
} else if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num1 / num2;
}
alert( num1+operator+num2+ "=" + result);