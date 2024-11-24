
let storeItem = {
    description: "Persian rice 100g",
    price: 10,
    nutritional_value: [4,44,0.5],
    discount: function (discountPercent) {
        let tempDiscount = (discountPercent / 100 );
        let currentDiscount = (tempDiscount * this.price);
        return this.price - currentDiscount;
    }
};
storeItem.price = 420;
console.log("The price before discount -- > " + storeItem.price);
storeItem["price"] = storeItem.discount(30);
console.log("The price after discount -- > " + storeItem.price);



let user = {
    name: "Yakov",
    email: "yakov@gmail.com",
    age: 29,
    login: function (){
        console.log("The user logged in.");
    },
    isUserOldEnough: function (){
        if (this.age >= 16){
            console.log("The user is old enough.");
        }else {
            console.log("The user is too young.");
        }
    }
};

user.login();
user.isUserOldEnough();

