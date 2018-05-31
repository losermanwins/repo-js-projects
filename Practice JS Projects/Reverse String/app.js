//EXTENDED : Includes Reverse String and Palindrome Check

//Take in a string from the user (figure out how to take input) //works
let input = prompt("Please enter a word");
document.writeln(input);
//reverse the string
let reverse = new Array();
for (i = 0; i < input.length; i++){
    reverse[input.length - i] = input.charAt(i);
}
let rword = reverse.join("");
document.writeln(rword);
if (rword === input) {
    document.writeln("This is a palindrome!");
}
else {
    document.writeln("This is not a palindrome :( ");
}