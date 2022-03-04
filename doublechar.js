/*
CodeWars:https://www.codewars.com/kata/56b1f01c247c01db92000076
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
*/
//Solution:
function doubleChar(str) {
    let str1 = ""
    for (var i = 0; i < str.length; i++) {
        str1 += str[i] + str[i]
    }
    return str1
}