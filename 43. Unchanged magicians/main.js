var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// function to display magicians names
function show_magician(magician) {
    magician.forEach(function (magician) { console.log(magician); });
}
// funtion to modify magicians names and return to a new array
function make_great(magician) {
    var modifiedMagicians = __spreadArray([], magician, true);
    for (var i = 0; i < modifiedMagicians.length; i++) {
        modifiedMagicians[i] = "The Great" + modifiedMagicians[i];
    }
    return modifiedMagicians;
}
//Array of Magician names
var magicianNames = ["David", "Alice", "Chris"];
// call make_great function to modify magicians names and return to a new array
var greatMagicians = make_great(magicianNames);
// Display original list of magicians
show_magician(magicianNames);
// Display modified list of magicians
show_magician(greatMagicians);
// show original list of magicians to show its unchanged
show_magician(magicianNames);
