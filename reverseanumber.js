/*Codewars:https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5

Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

*/

//Solution:
function reverseNumber(n) {
    let num = parseFloat(n.toString().split('').reverse().join(''))
    return num * Math.sign(n)
}