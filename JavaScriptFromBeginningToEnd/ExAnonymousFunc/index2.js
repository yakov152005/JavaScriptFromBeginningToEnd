let storeItems = [
    {name: "Classic guitar", price: 300},
    {name: "Electric piano", price: 2200},
    {name: "Drum set", price: 3500},
    {name: "Synthesizer", price: 5000},
    {name: "Flute", price: 900},
    {name: "Trumpet", price: 1500},
];

// מסננת לפי ביטוי בוליאני מסויים
let filteredItems = storeItems.filter(
     storeItems => storeItems.price < 1000
     );
console.log(filteredItems);

//ממפה את המערך למערך של שמות בלבד
let mapItem  = storeItems.map(
    (storeItems) => storeItems.name);
console.log(mapItem);

//ממפה ערך במערך למשהו אחר
let withDiscount = storeItems.map(
    storeItems => {return {
        name: (storeItems.name + " on sale"),
        price: (storeItems.price * 0.9 ) ,
    }}
);
console.log(withDiscount);

// מחפשת איבר מסוים
let findItem = storeItems.find(
    storeItems => storeItems.price === 3500
);
console.log(findItem);

//עוברת על כל האיברים
storeItems.forEach(
    storeItems => { console.log(storeItems.name)}
);

//  מחזיר טרו או פולס בהתאם לאם יש איבר אחד שעומד על פי התנאי
let containsExpensiveItems = storeItems.some(
    (storeItems)=> storeItems.price > 3000
    );
console.log(containsExpensiveItems);

// צריך לקבל עבור כל איברי המערך ואז יחזיר ערך בולייאני
let allItemsExpensive = storeItems.every(
    (storeItems)=> storeItems.price > 200
);
console.log(allItemsExpensive);