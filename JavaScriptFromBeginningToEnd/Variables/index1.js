
let age = 18;
let age2 = 12;
let a = true;
let b = false;


if(age2 < 20){
    console.log("Hey")
}else if(age2 == 20){
    console.log("Why")
}else{
    console.log(":D")
}

let status = (age >= 18) ? "Adult" : "Minor";

console.log(status); // "Adult"
console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false


/*
 let age = 22;
 let name = "yakov";
 const MAX_VALUE = 20;

 if(age > 20){
     console.log(name) 
     alert("hey");
     alert(MAX_VALUE);
 }else{
     alert("Loser");
 }

 let person = {
     firstName:"Yakov ", 
     lastName:"Ben hemo"
 }

alert(person.firstName + person.lastName);
console.log(person);

let colors = ["blue","res"];
colors[2] = "green";
colors[3] = 2;
console.log(colors);
*/