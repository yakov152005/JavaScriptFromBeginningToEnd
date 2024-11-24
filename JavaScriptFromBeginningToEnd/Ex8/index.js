function btn1(){
    let xStr = document.getElementById("num1").value;
    let xVal = parseInt(xStr);
    let result = 0;

    if(xVal % 7 == 0){
        result = Math.pow(xVal,3);
        console.log(xVal + "^3 = " + result);
    }else{
        result = Math.pow(xVal,2);
        console.log(xVal + "^2 = " + result);
    }

    document.getElementById("result").innerHTML = result;
}