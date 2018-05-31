//Write a loop that creates an array 1-100 (print this as a test first.) //Working
let arr = new Array();
for (i = 0; i < 100; i++) {
    arr[i] = i+1;
}
//We now have an array with 100 numbers. (stored in arr)
//Write a loop that prints each number in an array to the console.
for (j = 0; j < arr.length; j++) {
    //Write some conditionals within the loop that check to see if it's divisible by 3, 5, or 3 and 5, and replace the number as such.
    if (arr[j] % 3 === 0 && arr[j] % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (arr[j] % 3 === 0) {
        console.log("Fizz");
    }
    else if (arr[j] % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(arr[j]);
    }
}

