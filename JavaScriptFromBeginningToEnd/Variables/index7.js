function sayHello(number) {
    if(number == 0 ){
        return
    }

    sayHello(number - 1)
    console.log("hello " + number)
}

sayHello(5)