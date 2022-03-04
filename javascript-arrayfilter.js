/*
Codewars:https://www.codewars.com/kata/514a6336889283a3d2000001
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
*/

function getEvenNumbers(numbersArray) {
    let even = [];
    for (let i of numbersArray) {
        if (i % 2 == 0) {
            even.push(i)
        }
    }
    return even;
}