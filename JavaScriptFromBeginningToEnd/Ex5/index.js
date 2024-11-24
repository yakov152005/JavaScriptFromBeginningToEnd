function fullString(){
    let firstStr = document.getElementById("input1").value;
    let secondStr = document.getElementById("input2").value;
    
    let fullStr = "";
    let disableCheck = document.getElementById("disableCheck").checked;
    console.log(disableCheck)

    if(disableCheck){
        fullStr = secondStr + " " + firstStr;
    }else{
        fullStr = firstStr + " " + secondStr;
    }

    document.getElementById("result").innerHTML = fullStr; 
    console.log(fullStr);
}