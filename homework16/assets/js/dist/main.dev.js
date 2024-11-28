"use strict";

function Id(id) {
  return document.getElementById(id);
}

function startn1() {
  var n1 = 0.1 + 0.2;
  n1 = n1 * 100;
  n1 = Math.round(n1);
  n1 = n1 / 100;
  Id('n1').innerHTML = "<span>".concat(n1, "</span>");
}

var x = "1";
var y = 2;

function startt2() {
  x = Number(x);
  var t2 = x + y;
  Id('t2').innerHTML = "<span>".concat(t2, "</span>");
}

var size = 820;

function startt3() {
  var Gb = Id('Gb').valueAsNumber;

  if (isNaN(Gb) || Gb < 0) {
    Id('files').innerHTML = "<span>Invalid</span>";
  } else {
    var Mb = Gb * 1024;
    var files = Mb / size;
    files = Math.floor(files);
    Id('files').innerHTML = "<span>".concat(files, "</span>");
    return files;
  }
}

function calc() {
  var cash = Id('cash').valueAsNumber;
  var price = Id('price').valueAsNumber;

  if (isNaN(cash) || isNaN(price) || cash < 0 || price < 0) {
    Id('Amount').innerHTML = "<span>\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0447\u0438\u0441\u043B\u0430!</span>";
    Id('grnleft').innerHTML = "<span></span>";
    return;
  }

  if (price === 0) {
    Id('Amount').innerHTML = "<span>\u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E ;)</span>";
    return;
  }

  if (cash < price) {
    Id('Amount').innerHTML = "<span>\u0423 \u0432\u0430\u0441 \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043D\u044C\u043E \u0433\u0440\u043E\u0448\u0435\u0439 \u043D\u0430\u0432\u0456\u0442\u044C \u043D\u0430 \u043E\u0434\u043D\u0443 \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043A\u0443.</span>";
    Id('grnleft').innerHTML = "<span>\u0412\u0430\u0448\u0430 \u0441\u0443\u043C\u0430: ".concat(cash.toFixed(2), " \u0433\u0440\u043D.</span>");
    return;
  }

  var Amount = Math.floor(cash / price);
  var grnleft = Math.round((cash - Amount * price) * 100) / 100;
  Id('Amount').innerHTML = "<span>\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043A\u0443\u043F\u0438\u0442\u0438 ".concat(Amount, " \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A.</span>");
  Id('grnleft').innerHTML = "<span>\u0417\u0434\u0430\u0447\u0430: ".concat(grnleft.toFixed(2), " \u0433\u0440\u043D.</span>");
}

function rev() {
  var Num = Id('Num').valueAsNumber;

  if (isNaN(Num) || Num < 100 || Num > 999) {
    Id('Numrev').innerHTML = "<span>\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0447\u0438\u0441\u043B\u0430!</span>";
  } else {
    var LastNum = String(Num % 10);
    var SecondNum = String((Num % 100 - LastNum) / 10);
    var FirstNum = String(Math.floor(Num / 100));
    var Numrev = LastNum + SecondNum + FirstNum;
    Id('Numrev').innerHTML = "<span>".concat(Numrev, "</span>");
    return Numrev;
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