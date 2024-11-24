document.getElementById("btn2").addEventListener("click", function(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let resultBoolean = div(num1,num2);
    console.log(resultBoolean);
    let resultText;

    if(resultBoolean){
        resultText = "True";
    }else {
        resultText = "False";
    }

    document.getElementById("result").innerHTML = resultText;
});

function div(num1, num2){
   return (num1 % num2 == 0 || num2 % num1 == 0) ;
}