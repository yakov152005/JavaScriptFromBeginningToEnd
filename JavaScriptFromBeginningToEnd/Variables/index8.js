function multiplication(num1, num2){
    if(num2 == 0){
        return 0
    }

    return num1 + multiplication(num1, num2 - 1)
}

let result = multiplication(5,3)
console.log(result);