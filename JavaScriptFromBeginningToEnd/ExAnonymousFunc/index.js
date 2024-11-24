sayHello = function(){
    console.log("Hello world!");
}
sayHello();

sayHello2 = () =>{
    console.log("Hello world2!");
}
sayHello2();

document.getElementById("btn1").onclick = () => {
    console.log("clicked");
}

function click2(){
    console.log("clicked 2");
}

function op1(){
    console.log("op1 is running!");
}

setTimeout(op1,3000);// טיימר

setTimeout(function(){
    console.log("op2 is running!");
},5000);

setTimeout(() => {
    console.log("op3 is running!");
},10000);