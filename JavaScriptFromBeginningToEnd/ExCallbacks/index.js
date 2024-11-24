/*
function isInputLegal(n1,n2){
    return Number.isInteger(n1) && Number.isInteger(n2);
}
function mathAlg(n1,n2){
    return n1 + n2 ;
}
function dataExtraction(value){
    return value % 2 === 0;
}

 */

function checkValidityAndParity(n1,n2, mathAlg, extract){
     if (Number.isInteger(n1) && Number.isInteger(n2)){
         return mathAlg(n1,n2,extract);
     }else {
         return false;
     }
}
function mathAlg(n1,n2, extract){
    if (n1 + n2 > 20){
        return extract(n1 + n2);
    }else {
        return false;
    }
}
function dataExtraction(value){
    return value % 2 === 0;
}

let num1 = 12;
let num2 = 18;

let success = checkValidityAndParity(num1, num2,mathAlg,dataExtraction);
if(success){
    console.log("Great success");
}
