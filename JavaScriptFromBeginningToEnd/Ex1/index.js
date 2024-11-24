
function compare() {
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let sum = parseFloat(document.getElementById('sum').value);
    let res = (n1 + n2);

    let isEqual = (res === sum);

    if (isEqual) {
        document.getElementById("result").innerHTML = "TRUE"
    } else {
        document.getElementById("result").innerHTML = "FALSE"
    }

}