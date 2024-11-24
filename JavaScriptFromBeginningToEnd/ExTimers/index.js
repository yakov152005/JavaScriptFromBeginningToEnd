function timer(){
    let strVal1 = document.getElementById("input1").value;
    let strVal2 = document.getElementById("input2").value;
    let resultText = strVal1;

    document.getElementById("result").innerHTML = resultText;
    console.log(strVal1);

    setTimeout(() => {
        resultText += " " + strVal2;
        document.getElementById("result").innerHTML = resultText;
        console.log(resultText);
        },3000);

}

const showImage = document.getElementById("showImage");

let isStart = false;
let currentImage = 1;
let intervalID;

function startInterval(){
    isStart = !isStart;

    if (isStart) {
        document.getElementById("btn1").innerHTML = "Stop images";
        intervalID = setInterval(() => {
            showImage.src = `/ExTimers/images/img${currentImage}.png`;
            currentImage++;
            if (currentImage > 5) {
                currentImage = 1;
            }
        }, 300);
    }else {
        clearInterval(intervalID);
        document.getElementById("btn1").innerHTML = "Start images";
    }
}
