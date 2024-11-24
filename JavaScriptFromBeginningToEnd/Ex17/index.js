function productsOfX(xStr,yStr){
    let xVal = parseInt(xStr);
    let yVal = yStr.toLowerCase();
    let isNotStr = isNaN(xVal);
    let resultText = "";

    if(!isNotStr){
        switch (yVal){
            case "pow":
                resultText += "x = " + xVal + "<br>";
                resultText += "x ^ 2 = " + (xVal ** 2 )+ "<br>";
                resultText += "x ^ 3 = " + (xVal ** 3 );
                break;
            case "multiply":
                resultText += "x = " + xVal + "<br>";
                resultText += "x * 2 = " + (xVal * 2 )+ "<br>";
                resultText += "x  * 3 = " + (xVal * 3 );
                break;
            default:
                resultText = "Error: please enter 'pow' or 'multiply'";
        }
    }else {
        resultText = "Enter a invalid number." ;
    }

    console.log(resultText);
    document.getElementById("result").innerHTML = resultText;
}



document.getElementById("btn1").addEventListener("click", function(){
    let xStr = document.getElementById("input1").value;
    let yStr = document.getElementById("input2").value;
    productsOfX(xStr,yStr);
});


//<button type="button" onclick="productsOfX()">Ok</button>