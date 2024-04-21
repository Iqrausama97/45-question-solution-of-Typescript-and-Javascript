"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
var guestList = ['Amna', 'Sehrish', 'Anum', 'Sidra'];
exports.guestList = guestList;
for (var i = 0; i < guestList.length; i++) {
    console.log("Salam! ".concat(guestList[i], " \n Hope, you are doing well.\n \n We are invited you for dinner today.\n \nRegards,\n \n Iqra Khan \n"));
}
var absent_guest = "Sidra";
var new_guest = "Yasmeen Imran Khan";
guestList[3] = new_guest;
for (var i = 0; i < guestList.length; i++) {
    console.log("Salam! ".concat(guestList[i], " \n Hope, you are doing well.\n \n We are invited you for dinner today.\n \nRegards,\n \n Iqra Khan \n"));
}
console.log("Ms.".concat(absent_guest, " will not attend today's dinner"));
