// Packages needed for application

const inquirer = require('inquirer');
const fs = require('fs/promises');
const { generateMarkdown } = require("./generateMarkdown");



// Questions for user.

const questions = [{

    type: "input",
    message: "What is the title of your project?",
    name: "title"
},
{
    type: "input",
    message: "Please add a description of your project",
    name: "description"
},
{
    type: "input",
    message: "Please add installation instructions for your project",
    name: "installation"
},
{
    type: "input",
    message: "Please provide instructions and examples of the intended use off your project",
    name: "usage"
},
{
    type: "input",
    message: "Please provide contribution instructions",
    name: "contribution"
},
{
    type: "input",
    message: "Please provide tests for your file",
    name: "test"
},
{
    type: "list",
    message: "Select a license from the provided list",
    choices: [
        "MIT",
        "IBM",
        "Apache",
        "Mozilla",
        "Other",
        "None"
    ],

    name: "license"

},
{
    type: "input",
    message: "Enter your GitHub username",
    name: "username"
},
{
    type: "input",
    message: "Add your email to the questions section of your README file",
    name: "email"
}

]

// Function writes file

function responseHandler(response) {

    const markdownFile = generateMarkdown(response);

    fs.writeFile("README.md", markdownFile, "utf8")
        .then(() => console.log('ReadMe Created!'))
        .catch(err => console.log(`Error: ${err}`));
}

inquirer.prompt(questions)
    .then(responseHandler);


