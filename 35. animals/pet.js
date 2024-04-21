var animals = ['Lion', 'Leopard', 'Jaguar'];
//print name of each animals
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// print a sentence about each animal
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("The ".concat(animal, " is very dangerous animal."));
}
//print a common character of each animals
console.log("They all are Carnivorous.");
