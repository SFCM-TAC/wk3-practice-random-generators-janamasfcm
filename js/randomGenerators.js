
// TODO: Use constructor notation to create an object
// with properties and methods that can be shared by both
// diceRollGenerator and eightBallGenerator.
function Generator(array) {
  this.array = array || []
  this.generate = function (){
    var randomNumber = Math.random();
    var randomAnswer = Math.floor(randomNumber * this.array.length);
    var answer = this.array [randomAnswer];
    return answer;
  };

this.addResult = function(value) {
  this.array.push(value)
};

this.removeResult = function(value) {
  for(var i = 0; i < this.array.length-1; i++){
    if (array[i] === value) {
      this.array.splice(i,1);
    }
  }
}

// TODO: Initialise diceRollGenerator and eightBallGenerator
// using the constructor notation and the Generator object
// you just created
const diceRollGenerator{
  diceRollGenerator.first = 1
  diceRollGenerator.second = 2
  diceRollGenerator.third = 3
  diceRollGenerator.fourth = 4
  diceRollGenerator.fifth = 5
  diceRollGenerator.sixth = 6
}
const eightBallGenerator = {
  eightBallGenerator.first = 1
  eightBallGenerator.second = 2
  eightBallGenerator.third = 3
  eightBallGenerator.fourth = 4
  eightBallGenerator.fixth = 5
  eightBallGenerator.sixth = 6
}


function handleDiceRoll() {
  const resultElement = document.getElementById('diceResult');
  var diceResult = math.random()*6;

  // TODO: call a method on diceRollGenerator to populate result with a random value
  var RoundedNumber = math.cell(diceResult)
;  const result = "result";
  resultElement.innerHTML = result;
}

function handleEightBallShake() {
  const resultElement = document.getElementById('eightBallResult');

  // TODO: call a method on eightBallGenerator to populate result with a random value
  const result = "result";
  resultElement.innerHTML = result;
}

document.addEventListener("DOMContentLoaded", function() {
  // this code block runs when the page finishes loading
  // and attaches listeners for button clicks
  // e.g. when the diceButton is clicked, it will run the handleDiceRoll function
  const diceButton = document.getElementById('diceButton');
  if (diceButton) {
    diceButton.addEventListener('click', handleDiceRoll);
  }

  const eightBallButton = document.getElementById('eightBallButton');
  if (eightBallButton) {
    eightBallButton.addEventListener('click', handleEightBallShake);
  }
});
