function Id(id) {
    return document.getElementById(id)
}

function startn1() {
    let n1 = 0.1 + 0.2;
    n1 = n1 * 100;
    n1 = Math.round(n1);
    n1 = n1 / 100;
    Id('n1').innerHTML = `<span>${n1}</span>`;
}

let x = "1";
let y = 2;
function startt2() {
    x = Number(x);
    let t2 = x + y;
    Id('t2').innerHTML = `<span>${t2}</span>`;
}


const size = 820;
function startt3() {
    let Gb = Id('Gb').valueAsNumber;
    if (isNaN(Gb) || Gb < 0) {
        Id('files').innerHTML = `<span>Invalid</span>`;
    } else {
        let Mb = Gb * 1024;
        let files = Mb / size;
        files = Math.floor(files);
        Id('files').innerHTML = `<span>${files}</span>`
        return files;
    }
}


function calc() {
    let cash = Id('cash').valueAsNumber;
    let price = Id('price').valueAsNumber;
    if (isNaN(cash) || isNaN(price) || cash < 0 || price < 0) {
        Id('Amount').innerHTML = `<span>Будь ласка, введіть коректні числа!</span>`;
        Id('grnleft').innerHTML = `<span></span>`;
        return;
    }
    if (price === 0) {
        Id('Amount').innerHTML = `<span>бесплатно ;)</span>`;
        return;
    }
    if (cash < price) {
        Id('Amount').innerHTML = `<span>У вас недостатньо грошей навіть на одну шоколадку.</span>`;
        Id('grnleft').innerHTML = `<span>Ваша сума: ${cash.toFixed(2)} грн.</span>`;
        return;
    }
    let Amount = Math.floor(cash / price);
    let grnleft = Math.round((cash - Amount * price) * 100) / 100;
    Id('Amount').innerHTML = `<span>Ви можете купити ${Amount} шоколадок.</span>`;
    Id('grnleft').innerHTML = `<span>Здача: ${grnleft.toFixed(2)} грн.</span>`;
}



function rev() {
    let Num = Id('Num').valueAsNumber;
    if (isNaN(Num) || Num < 100 || Num > 999) {
        Id('Numrev').innerHTML = `<span>Будь ласка, введіть коректні числа!</span>`;
    } else {
        let LastNum = String(Num % 10);
        let SecondNum = String((Num % 100 -  LastNum) / 10);
        let FirstNum = String(Math.floor(Num / 100));
        let Numrev =  LastNum + SecondNum + FirstNum;
        Id('Numrev').innerHTML = `<span>${Numrev}</span>`
        return Numrev;
    }
}


const five_years = 5;
function profit() {
    let deposit = Id('deposit').valueAsNumber;
    if (isNaN(deposit) || deposit < 0) {
        Id('profit').innerHTML = `<span>Будь ласка, введіть коректні числа!</span>`;
    } else {
        let profit = deposit * five_years / 100 / 12 * 2;
        profit = Math.round(profit * 100) / 100;
        Id('profit').innerHTML = `<span>${profit}</span>`
        return profit;
    }
}