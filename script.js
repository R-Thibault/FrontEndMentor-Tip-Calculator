const bill = document.getElementById ('bill')
const numberOfPeople = document.getElementById ('numberOfPeople')
const tipPerPersonTextElement = document.getElementById ('tip-per-person')
const totalTipTextElement = document.getElementById ('total-tip')
const tipButtons = document.querySelectorAll ('.button')
const tipCustomTextElement = document.getElementById ('custom') 
const resetButton = document.querySelector ('.resetButton')
const errorDisplay = document.querySelector ('.error')

tipPerPersonTextElement.innerHTML = "$" + (0.0).toFixed(2);
totalTipTextElement.innerHTML = "$" + (0.0).toFixed(2);


tipButtons.forEach(function(value) {
  value.addEventListener('click', buttonValue)
})

bill.addEventListener ('input', billInput)
numberOfPeople.addEventListener ('input', peopleIinput )
tipCustomTextElement.addEventListener('input', customTipInput)
resetButton.addEventListener ('click', reset)

let billValue = 0;
let people = 1;
let tipValue = 0;

function billInput () {
  billValue = parseFloat(bill.value)
  tipCalculator()
}

function peopleIinput () {
  people = parseFloat(numberOfPeople.value)
  if (people === 0 ){
    errorDisplay.style.display = 'flex'
    tipPerPersonTextElement.innerHTML = "$" + (0.0).toFixed(2);
    totalTipTextElement.innerHTML = "$" + (0.0).toFixed(2);
  }else{
    errorDisplay.style.display = 'none'
    tipCalculator()
  }
}

function customTipInput () {
 tipValue = parseFloat(tipCustomTextElement.value /100)
 tipCalculator()
}

function buttonValue(event) {
  tipButtons.forEach(function(value){
    tipCustomTextElement.value = ''
    if(event.target.innerHTML == value.innerHTML)
      tipValue = parseFloat(value.innerHTML)/100
  })
  tipCalculator()
}

function tipCalculator(){
  if(people >= 1 && tipValue > 0){
    let tipPerPerson = (billValue * tipValue) / people
    let totalTip = (billValue *(1+tipValue))  /people
    tipPerPersonTextElement.innerHTML = "$" + tipPerPerson.toFixed(2);
    totalTipTextElement.innerHTML = "$" + totalTip.toFixed(2);
  }
}

function reset (){
  let billValue = 0;
  let people = 1;
  tipPerPersonTextElement.innerHTML = "$" + (0.0).toFixed(2);
  totalTipTextElement.innerHTML = "$" + (0.0).toFixed(2);
  bill.value = ""
  numberOfPeople.value = ""
  tipCustomTextElement.value = ""
  errorDisplay.style.display = 'none'
}