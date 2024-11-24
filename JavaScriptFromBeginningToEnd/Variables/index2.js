const RED = "red"
const GREEN = "green"
const YELLOW = "yellow"

let selectedColor = GREEN;

switch(selectedColor){
    case RED:
        console.log("stop")
        break
    case YELLOW:
        console.log("prepare to drive") 
        break
    case GREEN:
        console.log("start drive")
        break
    default:
        console.log("error")           
}
