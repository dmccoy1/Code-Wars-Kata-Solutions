/*
Codewars:https://www.codewars.com/kata/5a4ea304b3bfa89a9900008e
*/
//Solution:
function maxNumber(n) {
    let r = ("" + n).split("")
    return r.sort(function (a, b) { return b - a }).join('') * 1;

}