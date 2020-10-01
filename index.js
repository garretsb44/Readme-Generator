const generateMarkdown = require("./util/generateMarkdown");

const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");


// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What title would you like?"
    },{
        type: "input",
        name: "description",
        message: "Give a description of project"
    },{
        type: "list",
        name: "license",
        message: "Which license do you prefer?", 
        choices: ["MIT","Apache2.0","GNUv3.0","BSD3.0", "none"]
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(
        questions
    ).then((answers) => {
        writeToFile("README.md", generateMarkdown({...answers}))
    })
    

}

// function call to initialize program
init();
