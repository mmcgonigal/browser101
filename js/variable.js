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

const num1 = 1 ;
const num2 = 2;
const result = num1 + num2;
console.log(result);

const num3 = 1;
const num4 =2 ;
const result2 = num3 +num4
console.log(result2);

function add (a,b) {
    return a+b;
}
const sum = add (num3, num4);
console.log(sum);
const doSomething = add ;
const result3 = doSomething(4,5);
console.log(result3);
const result4 = add(3,10);
console.log(result4);

function printSomething(){
    console.log("print something");
}
function printSomething1(a, b){
    console.log(`print this ${a}, and ${b}`)
}
printSomething1(100,1111);

function surprise(operator){
    const result = operator
}

//TODO Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent. If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string looking like: “$XX.XX”. If either or both inputs are not numeric or numeric strings, calculateTax should return false.

function calculateTax(a, b) {
   return `"$${a + a*(b/100)}"`
}

console.log(calculateTax(25, 8));
calculateTax([1,2,3],10)