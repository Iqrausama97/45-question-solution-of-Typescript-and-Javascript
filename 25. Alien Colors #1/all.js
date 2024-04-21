// create the variable
var alien_color = "green";
// print the message if color is green
if (alien_color === "green") {
    console.log("The player just earned 5 points.");
}
// another program that fails
alien_color = 'red';
if (alien_color === "green") {
    console.log("The player just earned 5 points.");
}
