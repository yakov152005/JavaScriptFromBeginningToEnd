function check(){
    let n1 = parseInt(document.getElementById('in1').value);
    let n2 = parseInt(document.getElementById('in2').value);
    let text = document.getElementById('in3').value;
    let isTrue = false;

    if ((n1 > 16 && n1 < 28) || (n2 > (n1 * 10)) || (text === "hedgehog")) {
        isTrue =  true;
    }
    
    document.getElementById("result").innerHTML = isTrue ? "True" : "False";

}


