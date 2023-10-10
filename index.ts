import * as inquirer from "inquirer";
import chalk from "chalk";

//calculator operators:

enum operators
{

    add="addition",
    subtract="subtraction",
    multiply="multiplication",
    divide="division"

}

const prompt = inquirer.createPromptModule();

function validateNumber(input:string): boolean | string
{if (isNaN(parseFloat(input)))
    {
        return "Please enter a valid number"
    }
return true;
}

async function main()
{
   const input=await prompt
   ([
     {
      type: "input",
       name:"num1",
       message:"Please enter the first number:",
       validate :validateNumber
     },
     {
         type:"rawlist",//or can use list;
         name:"operator",
         message:"Select an operation:",
         choices:Object.values(operators)
     },
     {
         type: "input",
          name:"num2",
          message:"Please enter the second number:",
          validate :validateNumber
     }
      
    ])

     const num1 = parseFloat(input.num1);
     const num2 = parseFloat(input.num2);
     const slectedOperator= input.operator as operators;
     let result:number;

     if(slectedOperator === operators.add)
     {
        result= num1+num2
        console.log(chalk.green.bgBlackBright(`Result is : ${result}`));
     }else if(slectedOperator === operators.subtract)
     {
        result= num1-num2
        console.log(chalk.red.bgBlueBright(`Result is : ${result}`));
     }else if(slectedOperator === operators.multiply)
     {
        result= num1*num2
        console.log(chalk.white.bgGray(`Result is : ${result}`));
     }else if(slectedOperator === operators.divide)
     {
        result= num1/num2
        console.log(chalk.bgGreenBright.bgCyan(`Result is : ${result}`));
     }
}

main();