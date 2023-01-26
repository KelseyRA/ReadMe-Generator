// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs/promises');

// console.log(inquirer);

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        "type": "input",
        "message": "What is the title of your project?",
        "name": "title"
    },
    {
        "type": "input",
        "message": "Please add a description of your project",
        "name": "description"
    },
    {
        "type": "input",
        "message": "Please add installation instructions for your project",
        "name": "installation"
    },
    {
        "type": "input",
        "message": "Please provide instructions and examples of the intended use off your project",
        "name": "usage"
    },
    {
        "type": "input",
        "message": "Please provide contribution instructions",
        "name": "contribution"
    },
    {
        "type": "input",
        "message": "Please provide tests for your file",
        "name": "test"
    },
    {
        "type": "list",
        "message": "Select a license from the provided list",
        "choices": [
            "MIT",
            "GPLv2",
            "Apache",
            "GPLv3",
            "Other",
            "None"
        ],

        "name": "license"

    },
    {
        "type": "input",
        "message": "Enter your GitHub username",
        "name": "username"
    },
    {
        "type": "input",
        "message": "Add your email to the questions section of your README file",
        "name": "email"
    }
])
    .then(function (answer) {
        console.log(answer.title);
        console.log(answer.license);
    });


// console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
