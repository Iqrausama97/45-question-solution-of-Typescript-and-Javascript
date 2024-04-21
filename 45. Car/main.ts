function createCar(manufacturer: string, model: string, ...extras: [string, any][]): Record<string, any> {
    let carInfo: Record<string, any> = {
        manufacturer: manufacturer,
        model: model
    };

    // Add additional information from extras
    extras.forEach(([key, value]) => {
        carInfo[key] = value;
    });

    return carInfo;
}

// Call the function with required information and additional details
const carObject = createCar("Toyota", "Corolla", ["color", "Blue"], ["year", 2023]);

// Print the object to check if the information was stored correctly
console.log(carObject);
