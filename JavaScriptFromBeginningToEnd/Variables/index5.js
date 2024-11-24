
const NUM_OF_TRIANGLE = 10
const STAR = "*"
drawTriangle(NUM_OF_TRIANGLE,STAR)
drawTriangle(4,"$")


function drawTriangle(size , char) {
    let triangle = "";
    let currentIndex = "";

    for (let i = 1; i <= size; i++) {
        currentIndex += char;
        triangle += currentIndex + "\n";
    }

    console.log(triangle)
}