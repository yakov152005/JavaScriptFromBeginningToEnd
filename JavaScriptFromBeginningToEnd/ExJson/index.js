let country = {
    name: "Switzerland",
    population: 8700000,
    area: 41285
};

// להפוך למחרוזת JSON
let countryJson = JSON.stringify(country);
console.log(country);
console.log(countryJson);

let continent = {
    continentName: "Europe",
    countries: [
        {
            name: "Switzerland",
            population: 8700000,
            area: 41285
        },
        {
            name: "Moldove",
            population: 2600000,
            area: 34000
        },
        {
            name: "Greece",
            population: 10700000,
            area: 132000
        }
    ]
};

let continentJson = JSON.stringify(continent);
console.log(continent);
console.log(continentJson);
let objFormJson = JSON.parse(continentJson); // להפוך חזרה לאובייקט
console.log(objFormJson);