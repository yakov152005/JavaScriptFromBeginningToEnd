function absu(){
    let num1 = document.getElementById('input1').value;
    let num1Val = parseInt(num1);
    let result = 0;

    if(num1Val < 0 ){
       result = (num1 * (-1));
    }else{
        result = num1Val;
    }

    document.getElementById('result').innerHTML = result;
}