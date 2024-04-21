interface items {
    name: string
    price: number
}
 
// Objects
const Dress: items={
    name: 'Sanasafinaz dress',
    price: 950
}
const Blender: items={
    name: 'West Point blender',
    price: 250
}
console.log(`Brand Name: ${Dress.name}, Price: $${Dress.price}`)
console.log(`Brand Name: ${Blender.name}, Price: $${Blender.price}`)