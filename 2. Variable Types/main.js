"use strict";
exports.__esModule = true;
var message = 'Welcome back';
console.log(message);
var x = 10;
var y = 20;
var title = 'Sample text';
var isBeginner = true;
var total = 50;
var name = 'Santhosh';
var sentence = "My name is ".concat(name, "\nI am a beginner in TypeScript");
console.log(sentence);
var n = null;
var u = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Santhosh', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'Santhosh';
var myVariable = 10;
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();
var myVariable1 = 10;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable1)) {
    console.log(myVariable1.name);
}
myVariable1.toUpperCase();
var a;
a = 10;
a = true;
var b = 20;
// b = true;  // Type error
var multiType;
multiType = 20;
multiType = true;
// multiType = "Hello";  // Type not assignable error
