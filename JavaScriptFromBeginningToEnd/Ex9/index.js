function btn1() {
    let str1 = document.getElementById("str1").value;
    const exclamation = '!';
    let isExclamation = false;

    for (let i = 0; i <= 2; i++) {
        let ch = str1[i];
        console.log(ch)
        if (ch === exclamation) {
            isExclamation = true;
            break;
        }
    }


    document.getElementById("result").innerHTML = isExclamation;
}