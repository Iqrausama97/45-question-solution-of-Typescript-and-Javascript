"use strict";
function makeShirt(size = "large", message = "Keep Calm and Code on") {
    return { size, message };
}
const largeShirtDefaultmessage = makeShirt();
const mediumShirtDefaultMessage = makeShirt("medium");
const smallShirtCustomMessage = makeShirt("small", "I love TypeScript");
console.log(largeShirtDefaultmessage);
console.log(mediumShirtDefaultMessage);
console.log(smallShirtCustomMessage);
