function Id(id) {
    return document.getElementById(id)
}

function FD() {
    Id('message').innerHTML = "оголошена через Function Declaration";
}


const EE = function () {
    Id('message2').innerHTML = "оголошена через Function Expression";
}


  
  const arrow = () => {
    Id('message3').innerHTML = "оголошена через Arrow Function";
  };
  
  
  (function () {
    alert("Це анонімна функція");
  })();
  
  
  const object = {
    method() {
        Id('message4').innerHTML = "оголошена як метод об'єкта";
        
    },
  };
  
  
  class Class {
    method2() {
      Id('message5').innerHTML = "оголошена як метод класу";
    }
  }
  
  const example = new Class();

  function Arguments(...args) {
      Id('message6').innerHTML = `Кількість: ${args.length}`;
      Arguments(2, 4, 8, 2, 7, 9, 6, 2,);
  }
  
  function compN(a, b) {
    let result; 
    if (a < b) {
        result = -1;
    } else if (a > b) {
        result = 1;
    } else {
        result = 0;
    }

    
    Id('message7').innerHTML = `порівняння чисел ${a} і ${b} = ${result}`;

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
Id('message8').innerHTML = (factorial(9));

function combinate(q, w, e) {
  const num = parseInt(`${q}${w}${e}`);
  Id('message9').innerHTML = (`Об'єднане число: ${q}, ${w}, ${e}: ${num}`);
  combinate(2, 5, 1);
}

function calculateArea(length, width) {
  if (width === undefined || isNaN(width)) {
      return length * length;
  }
  return length * width;
}

function calculateAndDisplayArea() {
  const length = Id("length").valueAsNumber;
  const width = Id("width").valueAsNumber;

  if (isNaN(length) || length <= 0) {
      Id("calculate").innerText = "Будь ласка, введіть коректну довжину.";
      return;
  }

  const area = calculateArea(length, width);
  Id("calculate").innerHTML = `Площа: ${area}`;
}