// make an array named magician names
var magicianNames = ["Alice", "David", "Chris"];
// function to display magician names
var magician = ["Alice", "David", "Chris"];
function show_magician(magician) {
    magician.forEach(function (magician) { console.log(magician); });
}
// function to modifies magicians names
function make_great(magicianNames) {
    for (var i = 0; i < magicianNames.length; i++) {
        magicianNames[i] = "The Great " + magicianNames[i];
    }
}
// call the function to modify magician names
make_great(magicianNames);
console.log("\nAfter adding `The Great`:");
show_magician(magicianNames);
