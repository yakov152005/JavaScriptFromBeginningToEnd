function sevenBoom(){
    let numStr = document.getElementById("num1").value;
    let numVal = parseInt(numStr);

    let result = "";

    while(numVal > 0){
        if(numVal % 7 === 0){
            console.log("Boom");
            result += "Boom" + '<br>';
        }else{
            console.log(numVal);
            result += numVal + '<br>';
        }
        numVal--;
    }

    document.getElementById("result").innerHTML = result;
}