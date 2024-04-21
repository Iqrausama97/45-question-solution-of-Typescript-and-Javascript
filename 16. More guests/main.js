"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
var guest_list = ['fatima', 'usama', 'mehak', 'areen fatima'];
exports.guest_list = guest_list;
console.log("I would like to inform you that we found a big dinner table.");
// Add arrays in beginning, middle and end.
guest_list.unshift("Sanam");
guest_list.push("Sumaira");
var middleIndex = Math.floor(guest_list.length / 2);
guest_list.splice(middleIndex, 0, "Samina");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear, ".concat(guest_list[i], ", \nYou are invited for dinner taday.\n \nYour Friend\n \nIQRA USAMA VOHRA\n"));
}
