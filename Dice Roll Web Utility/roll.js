//function that takes 2 inputs, one for number of dice and one for sides
//result should be a sum adding up each dice, a random number ranging from 1 to n sides
//find a way to add html functionality of buttons?

function diceRoll (n, sides) {
    let rollTotal = 0;
    for (i = 0; i < n; i++) {
        let nextRoll = Math.floor((Math.random() * sides) + 1); 
        console.log("You rolled : " + nextRoll);
        rollTotal += nextRoll;
        console.log(rollTotal);
    }
}

diceRoll(document.getElementsByName("noDice"),document.getElementsByName("Sides"));