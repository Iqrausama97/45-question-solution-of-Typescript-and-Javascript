var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var visitingPlaces = ['Paris', 'Kolkata', 'Maldives', 'Norway'];
console.log("Original order:", visitingPlaces);
console.log("Alphabetical order:", __spreadArray([], visitingPlaces, true).sort());
console.log("Still in Original order:", visitingPlaces);
console.log("reverse alphabetical order:", __spreadArray([], visitingPlaces, true).sort().reverse());
console.log("Still in Original order:", visitingPlaces);
visitingPlaces.reverse();
console.log("reverse order:", visitingPlaces);
visitingPlaces.reverse();
console.log("back to original order:", visitingPlaces);
visitingPlaces.sort();
console.log("sorted in alphabetical order:", visitingPlaces);
visitingPlaces.sort(function (a, b) { return b.localeCompare(a); });
console.log("sorted in reverse alphabetical order:", visitingPlaces);
