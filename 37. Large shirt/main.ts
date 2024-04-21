interface Shirt {
	size: string;
	message: string;
}
function makeShirt(size: string = "large", message: string = "Keep Calm and Code on"): Shirt {
    return {size, message};
}
const largeShirtDefaultmessage: Shirt = makeShirt();
const mediumShirtDefaultMessage: Shirt = makeShirt("medium");
const smallShirtCustomMessage: Shirt = makeShirt("small", "I love TypeScript");

console.log(largeShirtDefaultmessage);
console.log(mediumShirtDefaultMessage);
console.log(smallShirtCustomMessage);