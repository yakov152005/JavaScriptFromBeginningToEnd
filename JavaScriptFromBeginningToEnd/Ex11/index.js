let str = "Dog";
let category = "";

switch (str) {
    case "Cat":
    case "Dog":
        category = "Animal";
        break;
    case "Carrot":
    case "Tomato":
        category = "Plant";
        break;
    case "Tractor":
    case "Computer":
        category = "Machine";
        break;
    default:
        category = "Error";
}

console.log(category)