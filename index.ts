#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber: number = Math.floor(10000 + Math.random() * 90000)

let mybBalance: number = 0

let answer = await inquirer.prompt
(
    [
        {
        name: "student",
        type: "input",
        message: "Enter student name",
        validate:function(value){
            if(value.trim() !==""){
                return true;
            }
            return"please enter a non-ampty value";
        },


        },
        {
          name: "courses",
          type: "list",
          message: " select the course to enrlled",
          choices: ["ms office", "HTML","javascript", "typescript", "pythan" ]
        }
   ]
)

const tutionFee: {[key :string]: number}={
"ms office": 1000,
"HTML": 2000,
"javascript": 3000,
"typescript": 3000,
"pythan": 4000,
};
console.log(`\nTUtion Fees ${tutionFee[answer.courses]}/\n`);
console.log(`balnce ${mybBalance}\n`);

let paymentType = await inquirer.prompt(
    [
        {
          name: "payment",
          type: "list",
          message: "select",
          choices: ["bank", "transfer", "Easypaisa", "Jazzcash"]
        },
        {
            name: "amount",
            type: "input",
            message: "transfer money",
            validate:function(value){
                if(value.trim !== ""){
                    return true;
                }
                return "please enter a non empty value"
            }
        }
    ]
);
console.log(`\n select payment method ${paymentType.payment}\n`);
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount)
if(tutionFees === paymentAmount){
    console.log(`conratulation, you have successfully enrolled in ${answer.courses}.\n`);

let ans = await inquirer.prompt(
    [
        {
          name: "select",
          type: "list",
          message:"what would you like to do next",
          choices: ["view status","Exit"]
        }
])
 if(ans.select === "view status"){
    console.log("\n*******status*******\n");
    console.log(`student Name: ${answer.student}`);
    console.log(`student ID: ${randomNumber}`);
    console.log(`course: ${answer.courses}`);
    console.log(`tution FEES paid ${paymentAmount}`);
    console.log(`balance: ${mybBalance += paymentAmount}`);
 }else{
    console.log(`\nExiting student management system\n`)
 }
}else{
 console.log("invalid amount due to course\n ");

}

    
