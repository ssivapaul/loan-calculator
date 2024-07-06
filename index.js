function calculateLoan() {
  loanAmountValue = document.getElementById("loan-amount").value;
  interesRateValue = document.getElementById("interest-rate").value;
  monthsToPayValue = document.getElementById("months-to-pay").value;
  monthlyPayment = (
    (loanAmountValue * (1 + interesRateValue / 100)) /
    monthsToPayValue
  ).toFixed(2);
  document.getElementById(
    "payment"
  ).innerHTML = `monthlyPayment: ${monthlyPayment}`;
}
