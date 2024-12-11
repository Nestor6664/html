"use strict";

var CART = [{
  title: 'Milk',
  price: 32.5,
  qty: 2,
  isBuy: false
}, {
  title: 'Bread',
  price: 21.2,
  qty: 1,
  isBuy: false
}];

function addToCart(newTitle, newPrice, newQty) {
  var ind = CART.findIndex(function (el) {
    return el.title === newTitle;
  });
  console.log(ind);

  if (ind === -1) {
    CART.push({
      title: newTitle,
      price: newPrice,
      qty: newQty,
      isBuy: false
    });
  } else {
    CART[ind].qty += newQty;
  }
}

function checkAndAddToCard() {
  var title = document.getElementById('prodTitle').value;
  var price = document.getElementById('prodPrice').valueAsNumber;
  var qty = document.getElementById('prodQty').valueAsNumber;

  if (title === '') {
    alert("Enter product title, please");
    return;
  }

  if (isNaN(price)) {
    alert("Enter product title, please");
    return;
  } else {
    if (price <= 0) {
      alert("invalid price");
      return;
    }
  }

  addToCart(title, price, qty);
} // function Id(id) {
//     return document.getElementById(id)
// }
// function FD() {
//     Id('message').innerHTML = "оголошена через Function Declaration";
// }
// const EE = function () {
//     Id('message2').innerHTML = "оголошена через Function Expression";
// }
//   const arrow = () => {
//     Id('message3').innerHTML = "оголошена через Arrow Function";
//   };
//   (function () {
//     alert("Це анонімна функція");
//   })();
//   const object = {
//     method() {
//         Id('message4').innerHTML = "оголошена як метод об'єкта";
//     },
//   };
//   class Class {
//     method2() {
//       Id('message5').innerHTML = "оголошена як метод класу";
//     }
//   }
//   const example = new Class();
//   function Arguments(...args) {
//       Id('message6').innerHTML = `Кількість: ${args.length}`;
//       Arguments(2, 4, 8, 2, 7, 9, 6, 2,);
//   }
//   function compN(a, b) {
//     let result; 
//     if (a < b) {
//         result = -1;
//     } else if (a > b) {
//         result = 1;
//     } else {
//         result = 0;
//     }
//     Id('message7').innerHTML = `порівняння чисел ${a} і ${b} = ${result}`;
//     compN(9, 2);
// }
// function factorial(n) {
//   if (n < 0) {
//       return "Факторіал для від'ємних чисел не визначений";
//   }
//   if (n === 0 || n === 1) {
//       return 1; // Базовий випадок
//   }
//   return n * factorial(n - 1); // Рекурсивний виклик
// }
// Id('message8').innerHTML = (factorial(9));
// function combineDigits(a, b, c) {
//   const number = parseInt(`${a}${b}${c}`);
//   Id('message9').innerHTML = (`Об'єднане число: ${a}, ${b}, ${c}: ${number}`);
//   combineDigits(2, 5, 1);
// }
// function Id(id) {
//   return document.getElementById(id)
// }
// function startt1() {
//   let age = Id('age').valueAsNumber; 
//   if (isNaN(age) || age < 0) {
//       Id('message').innerHTML = `<span>Будь ласка, введіть коректні числа!</span>`;
//   } else if (age <= 11) {
//       Id('message').innerHTML = `<span>Ви дитина</span>`;
//   } 
//    else if (age <= 17) {
//       Id('message').innerHTML = `<span>Ви підліток</span>`;
//   } 
//    else if (age <= 59) {
//       Id('message').innerHTML = `<span>Ви дорослий</span>`;
//   } 
//    else {
//       Id('message').innerHTML = `<span>Ви Пенсіонер</span>`;
//   } 
// }
// function showSymbol() {
//   const symbols = {
//       1: "!",
//       2: "@",
//       3: "#",
//       4: "$",
//       5: "%",
//       6: "^",
//       7: "&",
//       8: "*",
//       9: "(",
//       0: ")"
//   };
//   const input = Id ("numberInput").value;
//   if (symbols.hasOwnProperty(input)) {
//         Id('message2').innerHTML = `На клавіші <b>${input}</b> розташований символ: <b>${symbols[input]}</b>`;
//   } else {
//         Id('message2').innerHTML = `<span style="color: red;">Введено некоректне число. Будь ласка, введіть від 0 до 9.</span>`;
//   }
// }
// function sum() {
//   let rangstart = Id('rangstart').valueAsNumber;
//   let rangend = Id('rangend').valueAsNumber;
//   let rang = 0;
//   if (rangstart % 1 || rangend % 1 || isNaN(rangstart) || isNaN(rangend)) {
//       Id('rang').innerHTML = `<span style="color: red">Треба ціле число!</span>`
//   } else {
//       if (rangend > rangstart) {
//           for (i = rangstart; i <= rangend; i++) {
//               rang = rang + i;
//           }
//       } else if (rangend < rangstart) {
//           for (i = rangend; i <= rangstart; i++) {
//               rang = rang + i;
//           }
//       } else {
//           rang = rangstart;
//       }
//   Id('rang').innerHTML = `<span>${rang}</span>`
//   }
// }
// const five_years = 5;
// function profit() {
//   let deposit = Id('deposit').valueAsNumber;
//   if (isNaN(deposit) || deposit < 0) {
//       Id('profit').innerHTML = `<span>Будь ласка, введіть коректні числа!</span>`;
//   } else {
//       let profit = deposit * five_years / 100 / 12 * 2;
//       profit = Math.round(profit * 100) / 100;
//       Id('profit').innerHTML = `<span>${profit}</span>`
//       return profit;
//   }
// }
// function spdil() {
//   let num1 = Math.abs(Id('num1').valueAsNumber);
//   let num2 = Math.abs(Id('num2').valueAsNumber);
//   let SPdilnuk;
//   if (isNaN(num1) || isNaN(num2)) {
//       Id('SPdilnuk').innerHTML = `<span style="color: red">Будь ласка, введіть коректні числа!</span>`
//   } else {
//       let min = Math.min(num1, num2);
//       for (i = min; i >= 1; i--) {
//           if (num1 % i === 0 && num2 % i === 0) {
//               SPdilnuk = i;
//               break;
//           }
//       }
//   Id('SPdilnuk').innerHTML = `<span>${SPdilnuk}</span>`
//   }
// }
// function dilnuki() {
//   let num = Math.abs(Id('dilnuk').valueAsNumber);
//   if (isNaN(num)) {
//       Id('result').innerHTML = `<span style="color: red">Будь ласка, введіть ціле число.</span>`;
//       return;
//   }
//   let dilnuk = [];
//   for (i = -num; i <= num; i++) {
//       if (num % i === 0) {
//           dilnuk.push(i);
//       }
//   }
//   Id('result').innerHTML = `<span>${num}: ${dilnuk.join(', ')}</span>`;
// }
// function checkPalindrome() {
//   let number = Id('number').value;
//   if (isNaN(number) || number.length !== 5) {
//       Id('resultpal').innerHTML = `<span>Будь ласка, введіть коректне п’ятирозрядне число!</span>`;
//       return;
//   }
//   let reversedNumber = number.split('').reverse().join('');
//   if (number === reversedNumber) {
//       Id('resultpal').innerHTML = `<span>Число ${number} є паліндромом!</span>`;
//   } else {
//       Id('resultpal').innerHTML = `<span>Число ${number} не є паліндромом.</span>`;
//   }
// }
// function calculateDiscount() {
//   let amount = Id('purchaseAmount').valueAsNumber;
//   if (isNaN(amount) || amount < 0) {
//       Id('result').innerHTML = `<span>Будь ласка, введіть коректну суму!</span>`;
//       return;
//   }
//   let discount = 0;
//   if (amount >= 200 && amount < 300) {
//       discount = 3;
//   } else if (amount >= 300 && amount < 500) {
//       discount = 5;
//   } else if (amount >= 500) {
//       discount = 7;
//   }
//   let discountAmount = (amount * discount) / 100;
//   let total = Math.round((amount - discountAmount) * 100) / 100;
//   Id('resultdis').innerHTML = discount > 0
//       ? `<span>Ваша знижка: ${discount}% (${discountAmount.toFixed(2)} грн). Сума до оплати: ${total.toFixed(2)} грн.</span>`
//       : `<span>Знижка не застосовується. Сума до оплати: ${amount.toFixed(2)} грн.</span>`;
// }
// function calc() {
//   let psitivNum = 0,
//       ngativNum = 0,
//       zrNum = 0,
//       oddNum = 0,
//       evnNum = 0;
//   let usrNum;
//   let usrNumAll = '';
//   let i = 0;
//   while (i < 10) {
//       usrNum = prompt('Введіть свій номер');
//       usrNum = Number(usrNum);
//       if (isNaN(usrNum)) {
//           Id('Stats').innerHTML = `<span>Ви ввели неправильне число!</span>`
//           break
//       } else {
//           i++;
//           usrNumAll = usrNumAll + ' ' + usrNum;
//           if (usrNum > 0) {
//               psitivNum++;
//           } else if (usrNum < 0) {
//               ngativNum++;
//           } else {
//               zrNum++;
//           }
//           if (usrNum % 2 === 0) {
//               evnNum++;
//           } else {
//               oddNum++;
//           }
//       }
//   }
//   if (i === 10) {
//       Id('Stats').innerHTML = `<span>Твої числа: ${usrNumAll}. ${psitivNum} Додатніх чисел: ${ngativNum} від'ємні числа, ${zrNum} нулів ${oddNum} непарні числа, ${evnNum} парні числа</span>`
//   }
// }
// function nameDays() {
//   let weekDay = 'Понеділок';
//   let result;
//   let i = 1;
//   do {
//       switch (i) {
//       case 1:
//           weekDay = 'Понеділок'
//           break
//       case 2:
//           weekDay = 'Вівторок'
//           break
//       case 3:
//           weekDay = 'Середа'
//           break
//       case 4:
//           weekDay = 'Четвер'
//           break
//       case 5:
//           weekDay = "П'ятниця"
//           break
//       case 6:
//           weekDay = 'Субота'
//           break
//       case 7:
//           weekDay = 'Неділя'
//           i = 0
//           break
//       }
//       result = window.confirm(`День тижня ${weekDay}. Хочеш побачити наступний день?`);
//       i++;
//   } while (result)
// }
// function showDays() {
//   const days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота", "Неділя"];
//   let i = 0; 
//   while (true) {
//       let nextDay = confirm(`День тижня: ${days[i]}. Хочеш побачити наступний день?`);
//       if (!nextDay) {
//           alert("Дякую, гарного дня!");
//           break; 
//       }
//       i = (i + 1) % days.length; 
//   }
// }