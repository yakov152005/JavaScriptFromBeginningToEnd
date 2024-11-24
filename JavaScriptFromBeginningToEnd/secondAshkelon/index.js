var numId = parseInt(document.getElementById("cartNumber").innerText);

function func1(){
    numId += 1;
    document.getElementById("cartNumber").innerHTML = numId;
}

function func2(){
    numId += 2;
    document.getElementById("cartNumber").innerHTML = numId;
}

function func3(){
    numId += 3;
    document.getElementById("cartNumber").innerHTML = numId;
}