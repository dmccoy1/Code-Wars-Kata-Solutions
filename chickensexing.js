/*Codewars:https://www.codewars.com/kata/57ed40e3bd793e9c92000fcb

Bob is a chicken sexer. His job is to sort baby chicks into a Male(M) and Female(F) piles. When bob can't guess can throw his hands up and declare it with a '?'.

Bob's bosses don't trust Bob's ability just yet, so they have paired him with an expert sexer. All of Bob's decisions will be checked against the expert's choices to generate a correctness score.

Scoring Rules
When they agree, he gets 1 point.
When they disagree but one has said '?', he gets 0.5 points.
When they disagree completely, he gets 0 points.
*/

function correctness(bobsDecisions, expertDecisions) {
    let sum = 0
    for (let i = 0; i < bobsDecisions.length; i++) {

        if (bobsDecisions[i] == expertDecisions[i]) {
            console.log(bobsDecisions[i] + " vs " + expertDecisions[i]);

            sum += 1
        }
        else if (bobsDecisions[i] == "?" || expertDecisions[i] == "?") {
            console.log(bobsDecisions[i] + " vs " + expertDecisions[i]);
            sum += 0.5
        }
        console.log(sum);
    }

    return sum
};
