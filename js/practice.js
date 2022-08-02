'use strict'
let input = document.querySelector("#input");

let button = document.querySelector("#button")
button.addEventListener("click",()=>{
    let text = input.value;
    console.log(text)
    console.log(typeof (text));
})