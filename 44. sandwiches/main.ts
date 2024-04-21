
function orderSandwich(...items: string[]): void {
    console.log("Sandwich Order Summary:");
    if (items.length === 0) {
        console.log("No items selected for the sandwich.");
    } else {
        console.log("Items on the sandwich:");
        items.forEach(item => console.log("- " + item));
    }
    console.log("-----------------------------");
}

// Call the function three times with different arguments
orderSandwich("Turkey", "Cheese", "Lettuce", "Tomato");
orderSandwich("Ham", "Swiss Cheese");
orderSandwich("Peanut Butter", "Jelly");
