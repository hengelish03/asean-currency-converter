const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amount = document.getElementById("amount");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");

// ASEAN currencies with hardcoded rates
const aseanRates = {
  KHR: 4100,
  IDR: 15200,
  LAK: 19000,
  MYR: 4.55,
  MMK: 2100,
  PHP: 56.5,
  SGD: 1.36,
  THB: 35.0,
  VND: 24000
};

const aseanNames = {
  KHR: "Cambodia",
  IDR: "Indonesia",
  LAK: "Laos",
  MYR: "Malaysia",
  MMK: "Myanmar",
  PHP: "Philippines",
  SGD: "Singapore",
  THB: "Thailand",
  VND: "Vietnam"
};

// Load dropdowns
function loadCurrencies() {
  const usdOption = document.createElement("option");
  usdOption.value = "USD";
  usdOption.textContent = "USD";
  fromCurrency.appendChild(usdOption);
  fromCurrency.value = "USD";

  Object.keys(aseanRates).forEach(code => {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = `${code} (${aseanNames[code]})`;
    toCurrency.appendChild(option);
  });
  toCurrency.value = "KHR";
}

loadCurrencies();

// Convert function
convertBtn.addEventListener("click", () => {
  const amt = parseFloat(amount.value);
  const to = toCurrency.value;

  if (isNaN(amt) || amt <= 0) {
    result.textContent = "Enter a valid USD amount.";
    return;
  }

  const rate = aseanRates[to];
  const converted = amt * rate;

  result.textContent = `${amt} USD = ${converted.toLocaleString()} ${to} 
(1 USD = ${rate.toLocaleString()} ${to})`;
});
