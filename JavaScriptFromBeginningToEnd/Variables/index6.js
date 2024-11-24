function drawTriangle(size , char) {
    let triangle = "";
    let currentIndex = "";

    for (let i = 1; i <= size; i++) {
        currentIndex += char;
        triangle += currentIndex + "\n";
    }

    return triangle
}

let shape = drawTriangle(5,"^")
shape += "#my shape"
console.log(shape)