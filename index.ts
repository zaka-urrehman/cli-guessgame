#! /usr/bin/env node

import inquirer from "inquirer";
function randomnumber() {
    return Math.floor (Math.random ()*10)+1;
    
}
let computerscore = 0 ;
let userscore = 0;

 async function main() {
    const response= await inquirer
    .prompt (
        {
            message: "enter a number between 1 and 10",
            type: "number",
            name: "userinput",

        }
    );
    const computernumber = randomnumber();
    const usernumber = response.userinput;
    console.log(`number of commputer : ${computernumber}`);
    console.log(`number of user : ${usernumber}`);
    
    if(computernumber===usernumber)
    {
        console.log("you have a correct guess")
        userscore ++;

    }
else{
    console.log("your guess in wrong")
    computerscore ++;
};
console.log(`computer score is : ${computerscore}`);
console.log(`score of user is : ${userscore}`);


const guessagain = await inquirer
.prompt ({
    message: "do you want to guess again",
    type : 'list',
    choices : [ "yes","no"],
    name : "guessinput",
});
if (guessagain.guessinput === "yes"){
    main();
}
}
main();

   
   
