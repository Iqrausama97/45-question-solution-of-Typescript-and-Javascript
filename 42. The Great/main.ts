// make an array named magician names

let magicianNames: string [] = ["Alice","David","Chris"];

// function to display magician names
let magician: string [] = ["Alice","David","Chris"];

function show_magician(magician:string[]){
    magician.forEach(magician => 
        {console.log(magician)});
}
// function to modifies magicians names
function make_great(magicianNames: string []){
    for(let i = 0; i < magicianNames.length; i++){
        magicianNames[i] = "The Great " + magicianNames[i];
    }
}
// call the function to modify magician names
make_great(magicianNames);

console.log("\nAfter adding `The Great`:");

show_magician(magicianNames)