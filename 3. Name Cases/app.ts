// lower case
let personName: string ="Areen Fatima";
console.log("lowercase:", personName.toLowerCase());

//  Upper case
console.log("uppercase:", personName.toLocaleUpperCase());

// Title case
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));