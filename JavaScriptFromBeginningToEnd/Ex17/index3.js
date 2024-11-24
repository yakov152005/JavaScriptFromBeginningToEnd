document.getElementById("btn3").addEventListener("click", function(){
   let str1 = document.getElementById("str1").value;
   let lengthForStrings = str1.length;
   const MIN_SIZE = 4;
   let resultText = cutStrings(lengthForStrings, MIN_SIZE,str1);

   document.getElementById("result").innerHTML = resultText;
});

function cutStrings(lengthForStrings,MIN_SIZE,str1){
    if (lengthForStrings < MIN_SIZE){
        return str1;
    }else {
        return str1.substring(0,2) + "" + str1.substring(str1.length-2);
    }
}