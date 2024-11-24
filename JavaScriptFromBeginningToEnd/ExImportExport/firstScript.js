import {askQuestion as func1, FULL_NAME, SHORT_NAME} from "./consts.js";

let par = document.getElementById('par1');
par.innerHTML = `My name is ${FULL_NAME}, but everybody calls me ${SHORT_NAME}`;
func1(par);