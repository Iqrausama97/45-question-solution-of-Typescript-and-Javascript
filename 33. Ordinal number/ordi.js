//store numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//loop through array
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    //determine ordinal ending
    var ordinalEnding = void 0;
    if (number === 1) {
        ordinalEnding = 'st';
    }
    else if (number === 2) {
        ordinalEnding = 'nd';
    }
    else if (number === 3) {
        ordinalEnding = 'rd';
    }
    else {
        ordinalEnding = 'th';
    }
    // for print the message
    console.log("".concat(number).concat(ordinalEnding));
}
