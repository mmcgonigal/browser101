'use strict'
const items = document.querySelector(".items");
const input = document.querySelector(".footer_input");
const addBtn =  document.querySelector(".footer_button");


function onAdd(){
    //take input from user
    const text = input.value;
    console.log(text);
    //create new item
    const item = createItem();
    //add new item in intems container
    items.appendChild(item);
    // reset input
    input.value='';
    input.focus()
}

addBtn.addEventListener("click",()=>{
    onAdd();
})