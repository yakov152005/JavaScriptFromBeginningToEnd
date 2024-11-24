let str1;
let str2;
let str3;
let res;
document.getElementById("btn1").onclick = function(){

    const inputs = document.getElementsByTagName("input");
    res = 0;

    for(let i = 0; i < inputs.length; i++){
        res += parseInt(inputs[i].value);
        // or res += +inputs[i].value;
    }

    document.getElementById("par1").innerHTML = res;

    
    /*
    let str1;
let str2;
let str3;
let res;
document.getElementById("btn1").onclick = function(){

    const inputs = document.getElementsByTagName("input");
    res = "";

    for(let i = 0; i < inputs.length; i++){
        res += inputs[i].value + " ";
    }

    res = res.trim();

    document.getElementById("par1").innerHTML = res;
    */
    /*

    str1 = document.getElementsByTagName("input")[0].value;
    str2 = document.getElementsByTagName("input")[1].value;
    str3 = document.getElementsByTagName("input")[2].value;

    res = str1 + " " + str2 + " " + str3;
    document.getElementById("par1").innerHTML = res;
    */
    /*
    let numOfClicks = 0;
    let strVar = " ";
    let pow = 0;
document.getElementById("btn1").onclick = function(){
    
    numOfClicks = numOfClicks + 1;
    strVar = strVar + numOfClicks + " ";
    pow = numOfClicks * numOfClicks;
    document.getElementById("par1").innerHTML = numOfClicks;
    document.getElementById("par2").innerHTML = strVar;
    document.getElementById("par3").innerHTML = pow;
    console.log(typeof numOfClicks);
    console.log(typeof strVar);
    console.log(typeof pow);



    <body>
    <p id="par1">0 </p>
    <p id="par2">letsss go</p>
    <p id="par3">on power</p>
    <button id = "btn1">Click me!</button>
    <br>
    <br>
    <input type="text"></input>
    <script src="JS/firstScript.js"></script>
</body>
    */
    /*
    let text;
     alert("Hello world!");
    document.getElementById("btn1").innerHTML = "The button was clicked"
    document.getElementById("par1").innerHTML = "The button was clicked"

       text = "change it!"
    document.getElementById("par1").innerHTML = text;
    document.getElementById("par2").innerHTML = text;
    document.getElementById("par3").innerHTML = text;
    document.getElementById("par4").innerHTML = text;
    document.getElementById("par5").innerHTML = text;
    */
}
