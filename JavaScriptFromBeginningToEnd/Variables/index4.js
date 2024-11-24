function drawTriangle() {
    const STAR = "*"
    let triangle = "";
    let currentIndex = "";

    for (let i = 1; i <= 5; i++) {
        currentIndex += STAR;
        triangle += currentIndex + "\n";
    }

    console.log(triangle)
}

drawTriangle()
drawTriangle()
drawTriangle()
drawTriangle()
drawTriangle()