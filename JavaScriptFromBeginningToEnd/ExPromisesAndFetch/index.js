function doTask1(effortLevel){
    return new Promise((resolve,reject)=>{
        if (effortLevel > 10){
            resolve("Task 1 completed");
        }else {
            reject("Task 1 failed") ;
        }
    });
}

function doTask2(effortLevel){
    return new Promise((resolve,reject)=>{
    if (effortLevel > 20){
        resolve("Task 2 completed");
    }else {
        reject("Task 2 failed") ;
    }
    });
}

let effortLevel = 19;
doTask1(effortLevel).then((message) => {
        console.log(message)
        return doTask2(effortLevel)
    }).then((message) =>{
        console.log(message);
    }).catch((message) => {
        console.log("Oh no! The promise was rejected!");
        console.log(message);
    })

