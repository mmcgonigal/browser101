'use strict'
class Counter{
    constructor(){
        this.counter = 0;
    }

    increase(runIf5Times){
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
           runIf5Times(this.counter)
        }
    }
}

const coolCounter = new Counter();

function printSomething(num){
    console.log(`yeepee !! ${num}`) ;
}

function alertNum(num) {
    alert(`Wow!! ${num}`)
}
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(alertNum)
