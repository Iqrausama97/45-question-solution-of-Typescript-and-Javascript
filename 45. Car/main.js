function createCar(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additional information from extras
    extras.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        carInfo[key] = value;
    });
    return carInfo;
}
// Call the function with required information and additional details
var carObject = createCar("Toyota", "Corolla", ["color", "Blue"], ["year", 2023]);
// Print the object to check if the information was stored correctly
console.log(carObject);
