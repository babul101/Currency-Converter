const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");

const rate = document.getElementById("rate");
const swap = document.getElementById("swap");

// Using the fetch and updating the UI

function calculate() {
  const currencyOneValue = currencyOne.value;
  const currencyTwoValue = currencyTwo.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOneValue}`)
    .then((res) => res.json())
    .then((data) => {
      const rate1 = data.rates[currencyTwoValue];
      rate.innerText = `1 ${currencyOneValue} = ${rate1} ${currencyTwoValue}`;
      amountTwo.value = (amountOne.value * rate1).toFixed(2);
    });
}

// Event Listeners
currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
amountTwo.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
});

calculate();
