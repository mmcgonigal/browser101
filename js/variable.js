'use strict'

let number = 2;
let number2 = number;
console.log(number);
console.log(number2);

//object
let obj = {
    name:'mina',
    number: 35,
};
console.log(obj.name);
let obj2= obj;
console.log(obj2.name);
obj.name="james";
console.log(obj.name);
console.log(obj2.name);

let a = 2;
a = 5 ;
a = 9  // it is okay

const obj3 = {
    name : "Mina",
    age : 35,
    city : "san antonio",
}

console.log(obj3.name);

obj3.name= "james";

console.log(obj3.name);