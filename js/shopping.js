'use strict'
const items = document.querySelector(".items");
const input = document.querySelector(".footer_input");
const addBtn =  document.querySelector(".footer_button");


function onAdd(){
    //take input from user
    const text = input.value;
    console.log(text);
    //create new item
    //add new item in intems container
    // reset input
}

addBtn.addEventListener("click",()=>{
    onAdd();
})