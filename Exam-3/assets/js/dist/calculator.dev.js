"use strict";

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("plan").addEventListener("change", updatePlan);
  document.getElementById("investment").addEventListener("input", calculateProfit);
  document.getElementById("interest").addEventListener("input", calculateProfit);
  document.getElementById("compounding").addEventListener("input", calculateProfit);
});
var plans = {
  basic: {
    minInvestment: 1500,
    maxInvestment: 5000,
    compounding: 0.10
  },
  premium: {
    minInvestment: 5000,
    maxInvestment: 20000,
    compounding: 0.20
  },
  vip: {
    minInvestment: 20000,
    maxInvestment: 100000,
    compounding: 0.30
  }
};

function updatePlan() {
  var selectedPlan = document.getElementById("plan").value;
  var minInput = document.getElementById("min-investment");
  var maxInput = document.getElementById("max-investment");
  var compoundingInput = document.getElementById("compounding");

  if (plans[selectedPlan]) {
    minInput.value = plans[selectedPlan].minInvestment;
    maxInput.value = plans[selectedPlan].maxInvestment;
    compoundingInput.value = plans[selectedPlan].compounding * 100;
  } else {
    minInput.value = "";
    maxInput.value = "";
    compoundingInput.value = "";
  }

  calculateProfit();
}

function calculateProfit() {
  var selectedPlan = document.getElementById("plan").value;
  var investmentInput = document.getElementById("investment");
  var errorDiv = document.getElementById("error-message");

  if (!plans[selectedPlan]) {
    investmentInput.classList.remove("error");
    errorDiv.textContent = "";
    return;
  }

  var minInvestment = plans[selectedPlan].minInvestment;
  var maxInvestment = plans[selectedPlan].maxInvestment;
  var compounding = plans[selectedPlan].compounding;
  var investment = parseFloat(investmentInput.value) || 0;
  var interest = parseFloat(document.getElementById("interest").value) || 0;

  if (investment < minInvestment || investment > maxInvestment) {
    investmentInput.classList.add("error");
    errorDiv.textContent = "\u0406\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0456\u044F \u043C\u0430\u0454 \u0431\u0443\u0442\u0438 \u0432 \u043C\u0435\u0436\u0430\u0445 ".concat(minInvestment, " - ").concat(maxInvestment, "!");
  } else {
    investmentInput.classList.remove("error");
    errorDiv.textContent = "";
  }

  var validInvestment = Math.max(minInvestment, Math.min(investment, maxInvestment));
  var profit = validInvestment * compounding;
  var totalReturn = validInvestment + profit + interest;
  document.getElementById("profit").value = profit.toFixed(2);
  document.getElementById("total-return").value = totalReturn.toFixed(2);
}