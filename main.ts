#! /usr/bin/env node
// import the inquirer module,which is a command line interface for Node.js
import inquirer from "inquirer";
//declare a constant "answers"
const answers: { Sentence: string } = await inquirer.prompt([
  {
    name: "Sentence",
    type: "input",
    message: "Please provide your sentence for word counting:",
  },
]);
const words = answers.Sentence.trim().split(" ");
// print the array of words to the console
console.log(words);
// print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
