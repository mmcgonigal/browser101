'use strict'

//js is synchronous.
// meaning Execute the codeblock by order after hoisting
// what is hoisting?
// hoisting ----- var , function declaration goes to the top.

//Synchronous callback--- hoisiting
function printImmediately(print){
    print();
}
console.log('1');
console.log('2');
console.log('3');

// --> this executes in order of code

console.log('4');
setTimeout(function(){
    console.log('5')
},1000);
console.log('6')


printImmediately(()=>console.log("Hello"));

//Asynchronous callback

function printWithDelay(print, timeout) {
      setTimeout(print,timeout)
}




