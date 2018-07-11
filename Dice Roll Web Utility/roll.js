//function that takes 2 inputs, one for number of dice and one for sides
//result should be a sum adding up each dice, a random number ranging from 1 to n sides
//find a way to add html functionality of buttons?
var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

    var a = 0;
    var b = 0;
    rl.question("How many sides does the dice have?", (answer1) => {
        a = answer1;
        rl.question("How many times do you want to roll the dice?", (answer2) => {
        b = answer2;
        diceRoll(b, a);
        rl.close();
        });
    });
   

function diceRoll (n, sides) {
    let rollTotal = 0;
    for (i = 0; i < n; i++) {
        let nextRoll = Math.floor((Math.random() * sides) + 1); 
        console.log("You rolled : " + nextRoll);
        rollTotal += nextRoll;
        console.log("Total : " + rollTotal);
    }
}

diceRoll();