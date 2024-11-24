const DIVIDE = "/", ADD = "+", SUBTRACT = "-", MULTIPLY = "*", POWER = "^";
function calc() {
    let num1Str = document.getElementById("num1").value;
    let num2Str = document.getElementById("num2").value;
    let oparetion = document.getElementById("oparetion").value;

    let num1Val = parseFloat(num1Str);
    let num2Val = parseFloat(num2Str);
    let res = switchCalc(oparetion , num1Val , num2Val);

    document.getElementById("result").innerHTML = res;
}

function switchCalc(oparetion , num1Val , num2Val){
    let res;
    switch (oparetion) {
        case ADD:
            res = (num1Val + num2Val);
            break;
        case SUBTRACT:
            res = (num1Val - num2Val);
            break;
        case DIVIDE:
            res = forDivide(num1Val,num2Val);
            break;
        case MULTIPLY:
            res = (num1Val * num2Val);
            break;
        case POWER:
            res = (Math.pow(num1Val, num2Val));
            break;    
        default:
            "ERROR";    
    }
    
    return res;
}

function forDivide(num1Val, num2Val){
    let res;
    if (num2Val === 0) {
        res = "לא ניתן לחלק ב-0";
    } else {
        res = (num1Val / num2Val);
    }

    return res;
}
