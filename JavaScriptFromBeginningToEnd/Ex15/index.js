function isSeriesNumber() {
    let inputStr = document.getElementById("input1").value;
    let isSeriesNumber = true;
    let dif1 = 0;
    let dif2 = 0;
    let resultText = "";

    let numStr1 = inputStr.charAt(0);
    let numStr2 = inputStr.charAt(1);

    if (!checkIfIsANumber(numStr1, numStr2) || inputStr.length < 2) {
        resultText = "you need enter two number for a check series number."
        document.getElementById("result").innerHTML = resultText;
        return;
    }

    let numVal1 = parseInt(numStr1);
    let numVal2 = parseInt(numStr2);
    dif1 = numVal2 - numVal1;


    for (let i = 1; i < inputStr.length - 1; i++) {
        numVal1 = parseInt(inputStr[i]);
        numVal2 = parseInt(inputStr.charAt(i + 1))
        dif2 = numVal2 - numVal1;

        if (!(checkIfIsANumber(numVal1, numVal2)) || !(dif2 === dif1)) {
            isSeriesNumber = false;
            break;
        }
    }

    isSeries(isSeriesNumber, dif1, resultText);
}

function isSeries(isSeriesNumber, dif1) {
    if (isSeriesNumber) {
        console.log("I'ts a series number, the diff is --> " + dif1);
        resultText = "I'ts a series number, the diff is --> " + dif1;
    } else {
        resultText = "Is'nt a series number...";
        console.log("Is'nt a series number...");
    }

    document.getElementById("result").innerHTML = resultText;
}

function checkIfIsANumber(numStr1, numStr2) {
    if ((isNaN(numStr1) || isNaN(numStr2))) {
        return false;
    }
    return true;
}