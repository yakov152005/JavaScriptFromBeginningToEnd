function start() {
    let inputStr = document.getElementById("input1").value;
    let resultText = "";
    let consoleText = "";

    for (let i = 0; i < inputStr.length; i++) {
        let subStr = ""; 

        for (let j = i; j < inputStr.length; j++) {
            subStr += inputStr.charAt(j); 
            resultText += subStr + "<br>"; 
            consoleText += subStr + "\n";
        }
    }

    console.log(consoleText);
    document.getElementById("result").innerHTML = resultText;
}

function start2() {
    let inputStr = document.getElementById("input1").value;
    let resultText = "";
    let consoleText = "";

    for (let i = 0; i < inputStr.length; i++) {
        let ch = inputStr.charAt(i);
        let index = i + 1;

        while (index <= inputStr.length) {
            resultText += ch + '<br>';
            consoleText += ch + '\n';
            if (index < inputStr.length) {
                ch += inputStr.charAt(index);
            }
            index++;
        }

    }

    console.log(consoleText);
    document.getElementById("result").innerHTML = resultText;
}
