let fruits = ["banana", "orange","lemon","grape","fig"];
/*
const fruit0 = fruits[0];
const fruit1 = fruits[1];
const fruit2 = fruits[2];
 */

const [fruit0,fruit1 ,...rest] = fruits;
console.log(fruit0,fruit1);
console.log(rest)

const person1 = {
    name: "Mush",
    occupation: "shor",
    personality: "lovely",
    pet: "Tzabi",
    height: 1.49
}

/*
const personName = person1.name;
const personOcc = person1.occupation
const personPer = person1.personality;
const personPet = person1.pet;
const personHeight = person1.height;
console.log(personName, personOcc, personPer, personPet, personHeight);
 */

const {name: personName,occupation, personality, pet,height} = person1;
console.log(personName + " " + occupation + " " + personality + " " + pet +" ",occupation + " " + height);

const persons = [
    {name: "Mush",
    occupation: "shor",
    personality: "lovely",
    },
    {
        name: "Tovtov",
        occupation: "gamad",
        personality: "nice",
    },
    {
        name: "Tiptipon",
        occupation: "katkat",
        personality: "great",
    }
]
for (let i = 0; i < persons.length; i++) {
    //for(let person of persons)
    const {name,occupation} = persons[i];
    console.log(`${name} is ${occupation}`);
}