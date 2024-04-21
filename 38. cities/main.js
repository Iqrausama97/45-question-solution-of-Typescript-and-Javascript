function describe_cities(city, country) {
    if (country === void 0) { country = "unknown"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_cities("Karachi", "Pakistan");
describe_cities("Tokyo", "Japan");
describe_cities("New York", "USA");
