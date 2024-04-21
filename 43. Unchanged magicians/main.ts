// function to display magicians names
function show_magician(magician:string[]){
    magician.forEach(magician => 
        {console.log(magician)});
}
// funtion to modify magicians names and return to a new array
function make_great(magician:string[]): string[] {
    const modifiedMagicians: string[] = [...magician]
    for (let i = 0; i < modifiedMagicians.length; i++) {
        modifiedMagicians[i] = "The Great"  +  modifiedMagicians[i]
    }
    return modifiedMagicians;
}

//Array of Magician names
let magicianNames: string[] = ["David","Alice","Chris"]


// call make_great function to modify magicians names and return to a new array
const greatMagicians: string[ ] = make_great(magicianNames)

// Display original list of magicians
show_magician(magicianNames)

// Display modified list of magicians
show_magician(greatMagicians)

// show original list of magicians to show its unchanged
show_magician(magicianNames)

