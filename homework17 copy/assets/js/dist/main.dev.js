"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function Id(id) {
  return document.getElementById(id);
}

function FD() {
  Id('message').innerHTML = "оголошена через Function Declaration";
}

var EE = function EE() {
  Id('message2').innerHTML = "оголошена через Function Expression";
};

var arrow = function arrow() {
  Id('message3').innerHTML = "оголошена через Arrow Function";
};

(function () {
  alert("Це анонімна функція");
})();

var object = {
  method: function method() {
    Id('message4').innerHTML = "оголошена як метод об'єкта";
  }
};

var Class =
/*#__PURE__*/
function () {
  function Class() {
    _classCallCheck(this, Class);
  }

  _createClass(Class, [{
    key: "method2",
    value: function method2() {
      Id('message5').innerHTML = "оголошена як метод класу";
    }
  }]);

  return Class;
}();

var example = new Class();

function Arguments() {
  Id('message6').innerHTML = "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C: ".concat(arguments.length);
  Arguments(2, 4, 8, 2, 7, 9, 6, 2);
}

function compN(a, b) {
  var result;

  if (a < b) {
    result = -1;
  } else if (a > b) {
    result = 1;
  } else {
    result = 0;
  }

  Id('message7').innerHTML = "\u043F\u043E\u0440\u0456\u0432\u043D\u044F\u043D\u043D\u044F \u0447\u0438\u0441\u0435\u043B ".concat(a, " \u0456 ").concat(b, " = ").concat(result);
  compN(9, 2);
}

function factorial(n) {
  if (n < 0) {
    return "Факторіал для від'ємних чисел не визначений";
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

Id('message8').innerHTML = factorial(9);

function combinate(q, w, e) {
  var num = parseInt("".concat(q).concat(w).concat(e));
  Id('message9').innerHTML = "\u041E\u0431'\u0454\u0434\u043D\u0430\u043D\u0435 \u0447\u0438\u0441\u043B\u043E: ".concat(q, ", ").concat(w, ", ").concat(e, ": ").concat(num);
  combinate(2, 5, 1);
}

function calculateArea(length, width) {
  if (width === undefined || isNaN(width)) {
    return length * length;
  }

  return length * width;
}

function calculateAndDisplayArea() {
  var length = Id("length").valueAsNumber;
  var width = Id("width").valueAsNumber;

  if (isNaN(length) || length <= 0) {
    Id("calculate").innerText = "Будь ласка, введіть коректну довжину.";
    return;
  }

  var area = calculateArea(length, width);
  Id("calculate").innerHTML = "\u041F\u043B\u043E\u0449\u0430: ".concat(area);
}