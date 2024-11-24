function btn1(){
    let num1Str = document.getElementById("input1").value;
    let num1Val = parseFloat(num1Str);
    let wholeNum = Math.round(num1Val);
    const textNotWhole = "Original number is --> " + num1Val + " ronded num is --> " + wholeNum;

    if(wholeNum === num1Val){
        document.getElementById("result").innerHTML = "num is intger";
        console.log("num is intger");
    }else{
        document.getElementById("result").innerHTML = textNotWhole;
        console.log(textNotWhole)
    }
}