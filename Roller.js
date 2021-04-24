// WoD Dice roller

let numberOfDice = 10
let difficultyCheck = 6
let failures = 0
let botches = 0
let critical = 0
let successes = 0
let diceResults = 0
let explodingDice = false

//Dice Roller
function rollDice() {
    
    let diceOutcome = Math.floor(Math.random() * 10 + 1);
    console.log(diceOutcome)
    if(diceOutcome === 1){
        botches = botches + 1
    } else if (diceOutcome < difficultyCheck) {
        failures = failures + 1
    } else if (diceOutcome === 10) {critical = critical - 1, successes = successes + 1}  
    else {
      successes = successes + 1
    };
    }
 
for (let i = 0; i < numberOfDice; i++) {
  rollDice()
}

//Exploding Dice
if (explodingDice === true){
for (let i = critical; i < 0; i++) {
  let output = rollDice();
  if (output === 10) {
    i--
  }
}
}

//Results
diceResults = successes - botches
if (diceResults < 0){console.log(`Botch!`)}
else console.log(`Successes ${diceResults}`)
// console.log(`Sucessful Rolls`, successes)
// console.log(`Failure Rolls`, failures)
// console.log(`Botches`, botches)