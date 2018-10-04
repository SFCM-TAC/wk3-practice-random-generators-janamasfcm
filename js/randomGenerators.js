
// TODO: Use constructor notation to create an object
// with properties and methods that can be shared by both
// diceRollGenerator and eightBallGenerator.
function Generator(side1, side2, side3, side4, side5, side6) {
  this.first= side1;
  this.second= side2;
  this.third=side3;
  this.fourth= side4;
  this.fifth= side5
  this.sixth= side6;
  }

// TODO: Initialise diceRollGenerator and eightBallGenerator
// using the constructor notation and the Generator object
// you just created
const diceRollGenerator = new Generator (1,2,3,4,5,6,7,8,9,)

const eightBallGenerator = new Generator ('sure', 'okay', 'maybe so', 'if you think so', 'im not sure', 'lets see')

var outcome = function (obj) {
  var keys = Object.keys (obj)
  return obj[keys[ keys.length * math.random() <<0]];
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
