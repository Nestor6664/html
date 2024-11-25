"use strict";

var userName = prompt("Enter your name"); // alert("Hello, " + userName + "!")

alert("Hello, ".concat(userName));
var currentYear = 2024;
var birthYear = prompt("Enter your birth year");
var userAge = currentYear - birthYear;
alert("Your age is: ".concat(userAge, " years"));
var width = prompt("Enter square side width");
var perim = width * 4;
alert("Perimetr is " + perim);
console.log("\u0406\u043C'\u044F: ".concat(firstName, ", \u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435: ").concat(lastName)); // Однорядковий коментар

/* Багаторядковий
   коментар */
// Неправильні імена 
// let 1name = "Нестор";   // 
// let last-name = "Нестор"; // 
// let first name = "Нестор"; // 
// let let = "Нестор";       // 
// let @name = "Нестор";     // 

var radius = parseFloat(prompt("Введіть радіус кола  в метрах:"));

if (!isNaN(radius) && radius > 0) {
  var area = Math.PI * Math.pow(radius, 2);
  alert("\u041F\u043B\u043E\u0449\u0430 \u0437 \u0440\u0430\u0434\u0456\u0443\u0441\u043E\u043C ".concat(radius, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(area.toFixed(2), "."));
} else {
  alert("введіть правильне число для радіуса.");
}

var distance = parseFloat(prompt("Введіть відстань між містами в кілометрах:"));
var time = parseFloat(prompt("За скільки годин ви хочете дістатися?"));

if (!isNaN(distance) && distance > 0 && !isNaN(time) && time > 0) {
  var speed = distance / time;
  alert("\u0429\u043E\u0431 \u0434\u0456\u0441\u0442\u0430\u0442\u0438\u0441\u044F \u0437\u0430 ".concat(time, " \u0433\u043E\u0434\u0438\u043D, \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0457\u0445\u0430\u0442\u0438 \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E ").concat(speed.toFixed(2), " \u043A\u043C/\u0433\u043E\u0434."));
} else {
  alert("введіть коректні додатні числа для відстані та часу.");
}

var exchangeRate = 0.94;
var dollars = parseFloat(prompt("Введіть суму в доларах:"));

if (!isNaN(dollars) && dollars >= 0) {
  var euros = dollars * exchangeRate;
  alert("".concat(dollars, " \u0434\u043E\u043B\u0430\u0440\u0456\u0432 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(euros.toFixed(2), " \u0454\u0432\u0440\u043E \u0437\u0430 \u043A\u0443\u0440\u0441\u043E\u043C ").concat(exchangeRate, "."));
} else {
  alert("Будь ласка, введіть коректну суму в доларах.");
}