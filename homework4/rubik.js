let numSteps = 3 //numbers of steps
let maxcount = 6 //max значение кубика(ов)
let per1 =0
let per2 =0
let stepsCount = 0

while (stepsCount !== numSteps)
{
    randnum1 = Math.floor(Math.random() * (maxcount - 1) + 1);
    per1 +=randnum1
    randnum2 = Math.floor(Math.random() * (maxcount - 1) + 1);
    per2 +=randnum2
    stepsCount++
    }

if (per1 > per2){
    console.log(`Results: Player 1 has ${per1} points, Player 2 has ${per2} points. Player 1 wins! Congratulate!`)}

else if (per1 === per2){
    console.log(`Results: Player 1 has ${per1} points and Player 2 has ${per2} points. draw!`)}

else {
    console.log(`Results: Player 1 has ${per1} points, Player 2 has ${per2} points. Player 2 wins! Congratulate!`)}
