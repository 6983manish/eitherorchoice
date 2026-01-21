function calculate() {
  const loan = parseFloat(document.getElementById("loanRate").value);
  const invest = parseFloat(document.getElementById("investmentRate").value);
  const amount = parseFloat(document.getElementById("amount").value);

  let reasoning = "";
  let recommendation = "";

  if (!loan || !invest || !amount) {
    alert("Please fill all fields");
    return;
  }

  const loanSaving = amount * (loan / 100);
  const investmentGain = amount * (invest / 100);

  if (investmentGain > loanSaving) {
    recommendation = "Invest the money";
    reasoning = `
      Based on your inputs, investing offers a higher expected return
      (₹${investmentGain.toFixed(0)}) compared to interest saved by prepayment
      (₹${loanSaving.toFixed(0)}).
      If you are comfortable with market risk, investing is financially better.
    `;
  } else {
    recommendation = "Prepay the loan";
    reasoning = `
      Prepaying your loan saves more in guaranteed interest
      (₹${loanSaving.toFixed(0)}) than expected investment returns
      (₹${investmentGain.toFixed(0)}).
      This also reduces risk and improves cash flow.
    `;
  }

  document.getElementById("result").style.display = "block";
  document.getElementById("result").innerHTML = `
    <h3>Recommendation: ${recommendation}</h3>
    <p>${reasoning}</p>
    <p><em>AI-enhanced personalized explanations coming soon.</em></p>
  `;
}
