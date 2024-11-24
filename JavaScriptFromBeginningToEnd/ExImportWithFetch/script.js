import {URL1} from "./consts.js";
const userList = document.getElementById("userList");

    document.getElementById("btn1").onclick = function () {
        fetch(URL1)
            .then(res => {
                return res.json();
            })
            .then(data => {
                let answer = data.map(user => {
                    return `<li><p>Name: ${user.name}</p> <p>Email: ${user.email}</p></li>`;
                }).join("\n");
                console.log(answer);
                userList.innerHTML = answer;
                /*
               for (let i = 0; i < data.length; i++) {
                   const {name,email} = data[i];
                   console.log(`${name} is ${email}`);
                */
            })
            .catch(error => {
            })
    }

