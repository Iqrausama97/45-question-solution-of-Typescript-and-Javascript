// lower case
var personName = "Areen Fatima";
console.log("lowercase:", personName.toLowerCase());
//  Upper case
console.log("uppercase:", personName.toLocaleUpperCase());
// Title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
