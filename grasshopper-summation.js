//Codewars:https://www.codewars.com/kata/55d24f55d7dd296eb9000030

//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.


//Solution:
var summation = function (num) {
    let results = 0
    for (let i = 0; i <= num; i++) {
        results += i
    }
    return results
}