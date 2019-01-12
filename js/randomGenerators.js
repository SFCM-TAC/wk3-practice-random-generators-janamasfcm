
// TODO: Use constructor notation to create an object
// with properties and methods that can be shared by both
// diceRollGenerator and eightBallGenerator.
function Generator(array) {
  this.array = array || []
  this.generate = function(){
    var randomNumber = Math.random();
    var randomAnswer = Math.floor(randomNumber * this.array.length);
    var answer = this.array[randomAnswer];
    return answer;
  };
  this.addOption = function(option) {
    var index = options.indexOf(option);

    if (index === -1) {
      options.push(option);
      max++
    }
  };
  this.removeOption = function(option) {
    var index = options.indexOf(option);

    if (index !== -1) {
      options.splice(index, 1);
    }
  };
  };


// TODO: Initialise diceRollGenerator and eightBallGenerator
// using the constructor notation and the Generator object
// you just created
const diceRollGenerator = new Generator([1, 2, 3, 4, 5, 6]);
const eightBallGenerator = new Generator(["I don't know.", "naw.", "if you think so.", "maybe so."]);

function handleDiceRoll() {
  const diceResult = diceRollGenerator.generate();
  const resultElement = document.getElementById('diceResult');
  resultElement.innerHTML = diceResult;
}

function handleEightBallShake() {
  const ballResult = eightBallGenerator.generate();
  const resultElement = document.getElementById('eightBallResult');
  resultElement.innerHTML = ballResult;
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
