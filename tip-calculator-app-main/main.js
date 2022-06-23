let billEl = document.querySelector("#bill");
let numOfPeopleEl = document.querySelector("#numOfPeople");
let tipPercentages = document.querySelectorAll(".button");
let tipAmountPerPersonEl = document.querySelector("#tipPerPerson");
let totalAmountPerPersonEl = document.querySelector("#totalPerPerson");

let billAmount = 0;
let numOfPeople = 0;
let tipPercentage = 0;

billEl.addEventListener("keyup", (e) => {
    billAmount = Number(e.target.value);
    calculateTip();
});

numOfPeopleEl.addEventListener("keyup", (e) => {
    numOfPeople = Number(e.target.value);
    calculateTip();
});

Array.from(tipPercentages).forEach((tipPercentageEl) => {
    tipPercentageEl.addEventListener("click", (e) => {
        if (e.target.innerText.includes("%")) {
            tipPercentage = Number(e.target.innerText.replace("%", ""));
            applyActiveClass(e.target.innerText);
            calculateTip();
        }
    }) 
});

function calculateTip() {
    let tipAmount = billAmount * (tipPercentage / 100);
    let totalAmount = billAmount + tipAmount;
    let tipAmountPerPerson = tipAmount / numOfPeople;
    let totalAmountPerPerson = totalAmount / numOfPeople;

    updateValues({
        tipAmountPerPerson,
        totalAmountPerPerson,
    });
}
    
function updateValues({tipAmountPerPerson, totalAmountPerPerson}) {
    tipAmountPerPersonEl.innerText = 
    tipAmountPerPerson == Infinity ? 0 : tipAmountPerPerson.toFixed(2);
    totalAmountPerPersonEl.innerText = 
    totalAmountPerPerson == Infinity ? 0 : totalAmountPerPerson.toFixed(2);
}

function applyActiveClass(innerTextPect) {
    Array.from(tipPercentages).forEach ((tipPercentageEl) => {
        if (tipPercentageEl.innerText == innerTextPect) {
            tipPercentageEl.classList.add("active");
        }
        else {
            tipPercentageEl.classList.remove("active");
        }
    });
}