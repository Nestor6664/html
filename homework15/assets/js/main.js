const userName = prompt("Enter your name")
// alert("Hello, " + userName + "!")
alert(`Hello, ${userName}`)

const currentYear = 2024
const birthYear = prompt("Enter your birth year")
const userAge = currentYear - birthYear
alert(`Your age is: ${userAge} years`)

const width = prompt("Enter square side width")
const perim = width * 4
alert("Perimetr is " + perim)

console.log(`Ім'я: ${firstName}, Прізвище: ${lastName}`);


// Однорядковий коментар
/* Багаторядковий
   коментар */


// Неправильні імена 
// let 1name = "Нестор";   // 
// let last-name = "Нестор"; // 
// let first name = "Нестор"; // 
// let let = "Нестор";       // 
// let @name = "Нестор";     // 

let radius = parseFloat(prompt("Введіть радіус кола  в метрах:"));
if (!isNaN(radius) && radius > 0) {
      let area = Math.PI * Math.pow(radius, 2);
      alert(`Площа з радіусом ${radius} дорівнює ${area.toFixed(2)}.`);
} else {
      alert("введіть правильне число для радіуса.");
}

let distance = parseFloat(prompt("Введіть відстань між містами в кілометрах:"));
let time = parseFloat(prompt("За скільки годин ви хочете дістатися?"));
if (!isNaN(distance) && distance > 0 && !isNaN(time) && time > 0) {
      let speed = distance / time;
      alert(`Щоб дістатися за ${time} годин, потрібно їхати зі швидкістю ${speed.toFixed(2)} км/год.`);
} else {
      alert("введіть коректні додатні числа для відстані та часу.");
}


const exchangeRate = 0.94; 
let dollars = parseFloat(prompt("Введіть суму в доларах:"));
if (!isNaN(dollars) && dollars >= 0) {
      let euros = dollars * exchangeRate;
      alert(`${dollars} доларів дорівнює ${euros.toFixed(2)} євро за курсом ${exchangeRate}.`);
} else {
      alert("Будь ласка, введіть коректну суму в доларах.");
}

