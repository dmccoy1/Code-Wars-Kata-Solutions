//Codewars:https://www.codewars.com/kata/514a677421607afc99000002

//The following code is not giving the expected results. Can you debug what the issue is?
//The following is an example of data that would be passed in to the function.

//Solution:
function getNames(data) {
    var names = [];
    for (var key in data) {
        names.push(data[key].name);
    }
    return names;
}