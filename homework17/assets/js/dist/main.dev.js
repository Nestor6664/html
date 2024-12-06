"use strict";

function Id(id) {
  return document.getElementById(id);
}

function startt1() {
  var age = Id('age').valueAsNumber;

  if (isNaN(age) || age < 0) {
    Id('message').innerHTML = "<span>\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0447\u0438\u0441\u043B\u0430!</span>";
  } else if (age <= 11) {
    Id('message').innerHTML = "<span>\u0412\u0438 \u0434\u0438\u0442\u0438\u043D\u0430</span>";
  } else if (age <= 17) {
    Id('message').innerHTML = "<span>\u0412\u0438 \u043F\u0456\u0434\u043B\u0456\u0442\u043E\u043A</span>";
  } else if (age <= 59) {
    Id('message').innerHTML = "<span>\u0412\u0438 \u0434\u043E\u0440\u043E\u0441\u043B\u0438\u0439</span>";
  } else {
    Id('message').innerHTML = "<span>\u0412\u0438 \u041F\u0435\u043D\u0441\u0456\u043E\u043D\u0435\u0440</span>";
  }
}

function showSymbol() {
  var symbols = {
    1: "!",
    2: "@",
    3: "#",
    4: "$",
    5: "%",
    6: "^",
    7: "&",
    8: "*",
    9: "(",
    0: ")"
  };
  var input = Id("numberInput").value;

  if (symbols.hasOwnProperty(input)) {
    Id('message2').innerHTML = "\u041D\u0430 \u043A\u043B\u0430\u0432\u0456\u0448\u0456 <b>".concat(input, "</b> \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0438\u0439 \u0441\u0438\u043C\u0432\u043E\u043B: <b>").concat(symbols[input], "</b>");
  } else {
    Id('message2').innerHTML = "<span style=\"color: red;\">\u0412\u0432\u0435\u0434\u0435\u043D\u043E \u043D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0447\u0438\u0441\u043B\u043E. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0456\u0434 0 \u0434\u043E 9.</span>";
  }
}

function sum() {
  var rangstart = Id('rangstart').valueAsNumber;
  var rangend = Id('rangend').valueAsNumber;
  var rang = 0;

  if (rangstart % 1 || rangend % 1 || isNaN(rangstart) || isNaN(rangend)) {
    Id('rang').innerHTML = "<span style=\"color: red\">\u0422\u0440\u0435\u0431\u0430 \u0446\u0456\u043B\u0435 \u0447\u0438\u0441\u043B\u043E!</span>";
  } else {
    if (rangend > rangstart) {
      for (i = rangstart; i <= rangend; i++) {
        rang = rang + i;
      }
    } else if (rangend < rangstart) {
      for (i = rangend; i <= rangstart; i++) {
        rang = rang + i;
      }
    } else {
      rang = rangstart;
    }

    Id('rang').innerHTML = "<span>".concat(rang, "</span>");
  }
}

var five_years = 5;

function profit() {
  var deposit = Id('deposit').valueAsNumber;

  if (isNaN(deposit) || deposit < 0) {
    Id('profit').innerHTML = "<span>\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0447\u0438\u0441\u043B\u0430!</span>";
  } else {
    var _profit = deposit * five_years / 100 / 12 * 2;

    _profit = Math.round(_profit * 100) / 100;
    Id('profit').innerHTML = "<span>".concat(_profit, "</span>");
    return _profit;
  }
}

function spdil() {
  var num1 = Math.abs(Id('num1').valueAsNumber);
  var num2 = Math.abs(Id('num2').valueAsNumber);
  var SPdilnuk;

  if (isNaN(num1) || isNaN(num2)) {
    Id('SPdilnuk').innerHTML = "<span style=\"color: red\">\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0447\u0438\u0441\u043B\u0430!</span>";
  } else {
    var min = Math.min(num1, num2);

    for (i = min; i >= 1; i--) {
      if (num1 % i === 0 && num2 % i === 0) {
        SPdilnuk = i;
        break;
      }
    }

    Id('SPdilnuk').innerHTML = "<span>".concat(SPdilnuk, "</span>");
  }
}

function dilnuki() {
  var num = Math.abs(Id('dilnuk').valueAsNumber);

  if (isNaN(num)) {
    Id('result').innerHTML = "<span style=\"color: red\">\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u0446\u0456\u043B\u0435 \u0447\u0438\u0441\u043B\u043E.</span>";
    return;
  }

  var dilnuk = [];

  for (i = -num; i <= num; i++) {
    if (num % i === 0) {
      dilnuk.push(i);
    }
  }

  Id('result').innerHTML = "<span>".concat(num, ": ").concat(dilnuk.join(', '), "</span>");
}

function checkPalindrome() {
  var number = Id('number').value;

  if (isNaN(number) || number.length !== 5) {
    Id('resultpal').innerHTML = "<span>\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u043F\u2019\u044F\u0442\u0438\u0440\u043E\u0437\u0440\u044F\u0434\u043D\u0435 \u0447\u0438\u0441\u043B\u043E!</span>";
    return;
  }

  var reversedNumber = number.split('').reverse().join('');

  if (number === reversedNumber) {
    Id('resultpal').innerHTML = "<span>\u0427\u0438\u0441\u043B\u043E ".concat(number, " \u0454 \u043F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C\u043E\u043C!</span>");
  } else {
    Id('resultpal').innerHTML = "<span>\u0427\u0438\u0441\u043B\u043E ".concat(number, " \u043D\u0435 \u0454 \u043F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C\u043E\u043C.</span>");
  }
}

function calculateDiscount() {
  var amount = Id('purchaseAmount').valueAsNumber;

  if (isNaN(amount) || amount < 0) {
    Id('result').innerHTML = "<span>\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0443 \u0441\u0443\u043C\u0443!</span>";
    return;
  }

  var discount = 0;

  if (amount >= 200 && amount < 300) {
    discount = 3;
  } else if (amount >= 300 && amount < 500) {
    discount = 5;
  } else if (amount >= 500) {
    discount = 7;
  }

  var discountAmount = amount * discount / 100;
  var total = Math.round((amount - discountAmount) * 100) / 100;
  Id('resultdis').innerHTML = discount > 0 ? "<span>\u0412\u0430\u0448\u0430 \u0437\u043D\u0438\u0436\u043A\u0430: ".concat(discount, "% (").concat(discountAmount.toFixed(2), " \u0433\u0440\u043D). \u0421\u0443\u043C\u0430 \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u0438: ").concat(total.toFixed(2), " \u0433\u0440\u043D.</span>") : "<span>\u0417\u043D\u0438\u0436\u043A\u0430 \u043D\u0435 \u0437\u0430\u0441\u0442\u043E\u0441\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F. \u0421\u0443\u043C\u0430 \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u0438: ".concat(amount.toFixed(2), " \u0433\u0440\u043D.</span>");
}

function calc() {
  var psitivNum = 0,
      ngativNum = 0,
      zrNum = 0,
      oddNum = 0,
      evnNum = 0;
  var usrNum;
  var usrNumAll = '';
  var i = 0;

  while (i < 10) {
    usrNum = prompt('Введіть свій номер');
    usrNum = Number(usrNum);

    if (isNaN(usrNum)) {
      Id('Stats').innerHTML = "<span>\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E!</span>";
      break;
    } else {
      i++;
      usrNumAll = usrNumAll + ' ' + usrNum;

      if (usrNum > 0) {
        psitivNum++;
      } else if (usrNum < 0) {
        ngativNum++;
      } else {
        zrNum++;
      }

      if (usrNum % 2 === 0) {
        evnNum++;
      } else {
        oddNum++;
      }
    }
  }

  if (i === 10) {
    Id('Stats').innerHTML = "<span>\u0422\u0432\u043E\u0457 \u0447\u0438\u0441\u043B\u0430: ".concat(usrNumAll, ". ").concat(psitivNum, " \u0414\u043E\u0434\u0430\u0442\u043D\u0456\u0445 \u0447\u0438\u0441\u0435\u043B: ").concat(ngativNum, " \u0432\u0456\u0434'\u0454\u043C\u043D\u0456 \u0447\u0438\u0441\u043B\u0430, ").concat(zrNum, " \u043D\u0443\u043B\u0456\u0432 ").concat(oddNum, " \u043D\u0435\u043F\u0430\u0440\u043D\u0456 \u0447\u0438\u0441\u043B\u0430, ").concat(evnNum, " \u043F\u0430\u0440\u043D\u0456 \u0447\u0438\u0441\u043B\u0430</span>");
  }
}

function nameDays() {
  var weekDay = 'Понеділок';
  var result;
  var i = 1;

  do {
    switch (i) {
      case 1:
        weekDay = 'Понеділок';
        break;

      case 2:
        weekDay = 'Вівторок';
        break;

      case 3:
        weekDay = 'Середа';
        break;

      case 4:
        weekDay = 'Четвер';
        break;

      case 5:
        weekDay = "П'ятниця";
        break;

      case 6:
        weekDay = 'Субота';
        break;

      case 7:
        weekDay = 'Неділя';
        i = 0;
        break;
    }

    result = window.confirm("\u0414\u0435\u043D\u044C \u0442\u0438\u0436\u043D\u044F ".concat(weekDay, ". \u0425\u043E\u0447\u0435\u0448 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C?"));
    i++;
  } while (result);
}

function showDays() {
  var days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота", "Неділя"];
  var i = 0;

  while (true) {
    var nextDay = confirm("\u0414\u0435\u043D\u044C \u0442\u0438\u0436\u043D\u044F: ".concat(days[i], ". \u0425\u043E\u0447\u0435\u0448 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C?"));

    if (!nextDay) {
      alert("Дякую, гарного дня!");
      break;
    }

    i = (i + 1) % days.length;
  }
}