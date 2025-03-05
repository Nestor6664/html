document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("plan").addEventListener("change", updatePlan);
    document.getElementById("investment").addEventListener("input", calculateProfit);
    document.getElementById("interest").addEventListener("input", calculateProfit);
    document.getElementById("compounding").addEventListener("input", calculateProfit);
});

const plans = {
    basic: { minInvestment: 1500, maxInvestment: 5000, compounding: 0.10 },
    premium: { minInvestment: 5000, maxInvestment: 20000, compounding: 0.20 },
    vip: { minInvestment: 20000, maxInvestment: 100000, compounding: 0.30 }
};

function updatePlan() {
    let selectedPlan = document.getElementById("plan").value;
    let minInput = document.getElementById("min-investment");
    let maxInput = document.getElementById("max-investment");
    let compoundingInput = document.getElementById("compounding");

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
    let selectedPlan = document.getElementById("plan").value;
    let investmentInput = document.getElementById("investment");
    let errorDiv = document.getElementById("error-message");

    if (!plans[selectedPlan]) {
        investmentInput.classList.remove("error");
        errorDiv.textContent = "";
        return;
    }

    let minInvestment = plans[selectedPlan].minInvestment;
    let maxInvestment = plans[selectedPlan].maxInvestment;
    let compounding = plans[selectedPlan].compounding;

    let investment = parseFloat(investmentInput.value) || 0;
    let interest = parseFloat(document.getElementById("interest").value) || 0;

    if (investment < minInvestment || investment > maxInvestment) {
        investmentInput.classList.add("error");
        errorDiv.textContent = `Інвестиція має бути в межах ${minInvestment} - ${maxInvestment}!`;
    } else {
        investmentInput.classList.remove("error");
        errorDiv.textContent = "";
    }

    let validInvestment = Math.max(minInvestment, Math.min(investment, maxInvestment));
    let profit = validInvestment * compounding;
    let totalReturn = validInvestment + profit + interest;

    document.getElementById("profit").value = profit.toFixed(2);
    document.getElementById("total-return").value = totalReturn.toFixed(2);
}