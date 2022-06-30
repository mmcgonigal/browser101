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
    //add new item in items container
    items.appendChild(item);
    // reset input
    input.value='';
    input.focus()
}

function createItem(text){
    const itemRow= document.createElement('li')
    itemRow.setAttribute("class","item_row");

    const item= document.createElement('div')
    itemRow.setAttribute("class","item");

    const span = document.createElement("span");
    span.setAttribute("class","item_name");
    span.innerText = text

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class","item_delete");
    deleteBtn.innerHTML = " <i class=\"fa-solid fa-trash-can\"></i>"
    deleteBtn.addEventListener("click",()=>{
        items.removeChild(itemRow);
    })

    const itemDivider = document.createElement('div')
    itemDivider.setAttribute("class","item_divider")

    item.appendChild(name);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    item.appendChild(itemDivider);

    return itemRow;
}

addBtn.addEventListener("click",()=>{
    onAdd();
})