//Take input from the user to get a potential credit card number.
let input = prompt("Please enter your credit card number with no spaces.");
//Check to see if input is valid
for (i = 0; i < input.length; i++) {
    if (input.charAt(i) === " ") {
       throw "not a valid number. Please refresh.";
    }
}
//Convert the input into an array
let creditnum = input.split("");
for (m = 0; m < creditnum.length; m++) {
    console.log(creditnum[m]);
}
//Find out whether or not the number of digits is even or odd
//if (creditnum.length % 2 === 0) {
//    console.log("even number of digits");
//    for (j = 0; j < creditnum.length; j+2){
 //           creditnum[j] = creditnum[j] * 2;
//    }
//} else if (creditnum.length % 2 === 1) {
//    console.log("odd number of digits");
 //       for (k = 1; k < creditnum.length; k+2){
//                creditnum[k] = creditnum[k] * 2;
//        }
//    }

for(j = 0; j < creditnum.length; j++) {
    if (creditnum[j] >= 10) {
        console.log("Found number with 2 digits");
        let d1 = int.Parse(creditnum[j].ToString()[0].ToString());
        let d2 = int.Parse(creditnum[j].ToString()[1].ToString());
        creditnum[j] = d1 + d2;
    }
}

function getSum(total, num) {
    console.log("ran getSum");
    return total + num;
}

function sumcredit(array) {
    console.log("ran sumcredit");
    return array.reduce(getSum);
}

if (sumcredit(creditnum) % 10 === 0) {
    document.writeln("This is a valid credit card number.");
}
else {
    document.writeln("This is not a valid credit card number.")
}
//replace those digits and add the entire number up
//If the resulting sum is divisible by 10, it is a valid number.