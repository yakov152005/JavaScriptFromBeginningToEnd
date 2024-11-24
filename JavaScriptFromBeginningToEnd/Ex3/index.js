let x = prompt("Please enter a value: ");//לבקש מהמשתמש להכניס ערך
let xVal = parseInt(x);

if(xVal < 0){
    let res = (xVal * (-1));
    console.log('|' + xVal + '|' + " = " + res);
}else{
    console.log(xVal);
}
