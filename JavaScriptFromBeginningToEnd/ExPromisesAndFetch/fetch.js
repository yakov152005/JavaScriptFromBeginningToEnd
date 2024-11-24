function fetchFu(){
    fetch("http://localhost:63342/JavaScriptFromBeginningToEnd/ExJson/data.json")
        .then( (responseData) => {
            return responseData.json();
        }).then( (jsonData) => {
            console.log(jsonData);
        }).catch(function(err){
            console.log("Error: ", err);
        });
}