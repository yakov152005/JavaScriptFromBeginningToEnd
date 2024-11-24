let text = "Hello, World!";
console.log(text.substring(0, 5)); // פלט: "Hello"
console.log(text.slice(0, 5));     // פלט: "Hello"
console.log(text.slice(-6));       // פלט: "World!"

let text1 = "Hello";
console.log(text1.charAt(1)); // פלט: "e"

let text2 = "Hello, World!";
console.log(text2.indexOf("o"));         // פלט: 4
console.log(text2.lastIndexOf("o"));     // פלט: 8

let text3 = "Hello, World!";
console.log(text3.indexOf("o"));         // פלט: 4
console.log(text3.lastIndexOf("o"));     // פלט: 8

let text4 = "Hello, World!";
console.log(text4.includes("World"));    // פלט: true

let text5 = "Hello, World! World!";
console.log(text5.replace("World", "JavaScript"));      // פלט: "Hello, JavaScript! World!"
console.log(text5.replaceAll("World", "JavaScript"));   // פלט: "Hello, JavaScript! JavaScript!"

let text6 = "Hello, World!";
console.log(text6.toUpperCase()); // פלט: "HELLO, WORLD!"
console.log(text6.toLowerCase()); // פלט: "hello, world!"

let text7 = "apple,banana,orange";
let fruits = text7.split(",");
console.log(fruits); // פלט: ["apple", "banana", "orange"]

let text8 = "   Hello, World!   ";
console.log(text8.trim());         // פלט: "Hello, World!"
console.log(text8.trimStart());    // פלט: "Hello, World!   "
console.log(text8.trimEnd());      // פלט: "   Hello, World!"

let text9 = "Hello";
let text10 = "World";
console.log(text9.concat(", ", text10, "!")); // פלט: "Hello, World!"

let text11 = "Hello";
console.log(text11[1]); // פלט: "e"

let message = "Hello, World!";
console.log(message); // פלט: "Hello, World!"

// מחליף ל Stringbuilder
let parts = [];
parts.push("Hello");
parts.push(", ");
parts.push("World");
parts.push("!");
let message1 = parts.join(""); // חיבור כל חלקי המערך למחרוזת אחת
console.log(message1); // פלט: "Hello, World!"

// ריצה על  מחרוזת לולאת פור
let text12 = "JavaScript";
for (let i = 0; i < text12.length; i++) {
    console.log(text12[i]);
}

// for of  כדיל לרוץ על תווים במחרוזת
let text13 = "JavaScript";
for (let char of text13) {
    console.log(char);
}







