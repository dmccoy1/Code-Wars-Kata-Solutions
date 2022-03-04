/*
Codewars:https://www.codewars.com/kata/57cff961eca260b71900008f

Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/

//Solution:
function isVow(a) {
    for (i in a) {
        let cha = String.fromCharCode(a[i])
        const results = /[a,e,i,o,u]/.test(cha)
        if (results) {
            a[i] = cha
        }
    }
    return a

}