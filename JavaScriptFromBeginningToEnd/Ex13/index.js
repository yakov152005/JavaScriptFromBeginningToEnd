let textInput = prompt("Please enter a String: ");
let resultText = "";
console.log(textInput);

for(let i = 0; i < textInput.length; i++){
    let ch = textInput.charAt(i);
    console.log(ch);
    if(isNaN(ch)){
        if(ch >= 'a' && ch <= 'z'){
            ch = ch.toUpperCase();
        }
    }

    resultText += ch;
    ch = "";
}

console.log(resultText);