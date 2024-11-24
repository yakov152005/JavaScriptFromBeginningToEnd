/* דוגמא 1
function btn1(){
    let strVal = document.getElementById("str1").value;
    let ch = strVal.charAt(2);
    let checkCh = parseInt(ch);
   
    if(isNaN(checkCh)){
        strVal = strVal.replace(ch,'+');
    }else{
       strVal = strVal.replace(ch,'-');
    }

    document.getElementById("result").innerHTML = strVal;
}
*/

//דוגמא 2
function btn1(){
    let strVal = document.getElementById("str1").value;
    let firstPart = strVal.substring(0,2);
    let secondPart = strVal.substring(3);
    let chForCheck = strVal.charAt(2);
    let result = "";

    if(isNaN(chForCheck)){
        result = firstPart + '+' + secondPart;
    }else{
        result = firstPart + '-' + secondPart;
    }

    document.getElementById("result").innerHTML = result;
}