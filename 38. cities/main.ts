function describe_cities(city:string,country:string="unknown"){
    console.log(`${city} is in ${country}`)
}       

describe_cities("Karachi","Pakistan");
describe_cities("Tokyo", "Japan");
describe_cities("New York", "USA");