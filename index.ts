#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = () => { 
    return new Promise((res) => {
        setTimeout(res, 2000);
    })
}

async function welcome() {
    let glitchTitle = chalkAnimation.glitch("LET'S START THE CALCULATION!!");
    await sleep();
    glitchTitle.stop();
}

welcome();

const answers :{
    firstNo: number,
    secondNo: number,
    operator: string
} = await inquirer.prompt([
    {
        type: "number",
        name: "firstNo",
        message: "Enter your first Number: " 
    },
    {
        type: "number",
        name: "secondNo",
        message: "Enter your first Number: " 
    },
    {
        type: "list",
        name: "operator",
        choices:["*(Multiplication)","-(Subtraction)","+(Addition)","/(Division)"],
        message: "Enter the first Number: " 
    }
]);


const {firstNo, secondNo, operator} = answers
if(firstNo && secondNo && operator){
    let result : number = 0;
    if (operator === "*(Multiplication)") {
        result = firstNo * secondNo;  
    }
    else if (operator === "-(Subtraction)") {
        result = firstNo - secondNo;  
    }
    else if (operator === "+(Addition)") {
        result = firstNo + secondNo;  
    }
    else if (operator === "/(Division)") {
        result = firstNo / secondNo;  
    }
    console.log("Your result is:" , firstNo, operator, secondNo, result)
}
else{
    console.log("Invalid input!!!")
}