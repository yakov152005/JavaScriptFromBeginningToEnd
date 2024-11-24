let btn = document.querySelector("button")

btn.addEventListener("click", btnClick)

function btnClick(){
    console.log("hello")
}

let input = document.getElementById("input")
input.addEventListener("input", oninput)

function oninput(){
    let h1 = document.querySelector("h1")
    h1.textContent = this.value;
    console.log(this.value)
}

let form = document.querySelector("form")

form.addEventListener("submit", onSubmit)

function onSubmit(e){
    e.preventDefault()
    let value = document.querySelector("input").value
    console.log(value)
}

