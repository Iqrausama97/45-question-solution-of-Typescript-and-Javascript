//store numbers
let numbers: number[] =[1,2,3,4,5,6,7,8,9];

//loop through array
for (let number of numbers){
    //determine ordinal ending
    let ordinalEnding:string;
    if (number === 1){
        ordinalEnding = 'st';
    }else if (number ===2){
        ordinalEnding ='nd';
    }else if (number === 3){
        ordinalEnding= 'rd';
    }else {
        ordinalEnding='th'
    }
    // for print the message
console.log(`${number}${ordinalEnding}`);
} 