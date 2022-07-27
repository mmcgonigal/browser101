'use strict'
function solution(a, b, k) {


// You are given two arrays of integers a and b of the same length, and an integer k. We will be iterating through array a from left to right, and simultaneously through array b from right to left, and looking at pairs (x, y), where x is from a and y is from b. Such a pair is called tiny if the concatenation xy is strictly less than k.
    b.reverse();
    let arr = [];
    let tiny;
    for(let i = 0; i <a.length; i++){
        let stringA= a[i].toString()
        for(let j = 0 ; j <b.length; j++){
            let stringB = b[i].toString()
            arr.push(a[i].concat(b[i]));
        }
        return arr;
    }

    for(let m = 0; m <arr.length; m++){
        if(arr[m]<k) {
            tiny = arr[m];
        }
        return tiny
    }
}
let arr1 = [3,2,4,5,1,5,7,9,2]
let arr2 = [9,2,8,7,6,5,4,4,3]
let kk=13
console.log(solution(arr1, arr2, kk));