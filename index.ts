#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"



const sleep = ()=>{
return new Promise((res)=>{
    setTimeout(res,1000);
})    
}

async function Welcome(){ 
    console.log(`\n`);
    let rainbowtitle = chalkAnimation.rainbow('Calculator Animation Application ====>>>>>');
    await sleep();
    rainbowtitle.stop();
    console.log (chalk.red(`           
   ________________
  | 0              |
  |________________|
    ___   ___   ___
   | 7 | | 8 | | 9 |
    ___   ___   ___
   | 4 | | 5 | | 6 |
    ___   ___   ___
   | 1 | | 2 | | 3 |
    ___   ___   ___
   | 0 | | . | | * |
    `))
}
 await Welcome();
async function operation(){
    const ans = await inquirer
    .prompt([
      {
        type: "list",
        name: "operator",
        message: "Select Operation to Perform from list: ",
        choices: ["Addition", "Multiplication","Division","Subtraction","Power"]
      },
      {
        type: "number",
        name: "num1",
        message: chalk.yellowBright("Enter 1st Number: ")
      },
      {
        type: "number",
        name: "num2",
        message: chalk.greenBright("Enter 2nd Number: ")
      }
    ]);
   
        if ( ans.operator == "Addition")
        {
            console.log (chalk.greenBright(`${ans.num1} + ${ans.num2} = ${ans.num1 + ans.num2}`))
        }
        else if ( ans.operator == "Multiplication")
        {
            console.log (chalk.redBright(`${ans.num1} X ${ans.num2} = ${ans.num1 * ans.num2}`))
        }
        else if ( ans.operator == "Division")
        {
            console.log (chalk.bold(`${ans.num1} / ${ans.num2} = ${ans.num1 / ans.num2}`))
        }
        if ( ans.operator == "Subtraction")
        {
            console.log (chalk.greenBright(`${ans.num1} - ${ans.num2} = ${ans.num1 - ans.num2}`))
        }
        if ( ans.operator == "Power")
        {
            console.log (chalk.yellow(`${ans.num1} ^ ${ans.num2} = ${ans.num1 ^ ans.num2}`))
        }
    
  
}

async function restart()
{
    do{
       await operation();
        var again = await inquirer.prompt(
        {
            type: "input",
            name: "restart",
            message: "do u want to continue press 'y' or 'n'"
        })
    
        }while(again.restart == 'y' || again.restart == 'Y')
}        

restart();
