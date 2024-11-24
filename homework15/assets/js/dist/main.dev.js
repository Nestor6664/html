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