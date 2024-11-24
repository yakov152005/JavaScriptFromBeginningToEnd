
let originalStrArr = ["ma" , "ani", "chashdanist"];
let resultText= [];
let size = originalStrArr.length

for (let i = originalStrArr.length - 1; i >= 0; i--) {
    resultText.unshift(originalStrArr[i]);
    resultText.push(originalStrArr[i]);
    console.log(resultText);
}

console.log(resultText);
document.getElementById("result").innerHTML = resultText;


/*
let originalStrArr = ["ma" , "ani", "chashdanist"];
let resultText= [];
let size = originalStrArr.length

for (let i = 0 ; i < size; i++) {
    resultText.push(originalStrArr[i]);
}

for (let i = size -1; i >=0  ; i--) {
    resultText.push(originalStrArr[i]);
}

console.log(resultText);
document.getElementById("result").innerHTML = resultText;


 */
