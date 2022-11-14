"use strict";
exports.__esModule = true;
// Added question mark (?) for optional parameter and optional parameter always be after the required parameter
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add(5, 10));
console.log(add(5));
// console.log(add(5, '10'));  // Type error
// Default parameter has a default value
function subtract(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 - num2;
}
console.log(subtract(20));
console.log(subtract(20, 5));
