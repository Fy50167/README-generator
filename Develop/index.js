const inquirer = require('inquirer');
const fs = require('fs');

const questions = ['What is your project title?', 
'Enter a description for your project.', 
"What are the application's installation instructions?", 
"How is the application used?", 
"What are the guidelines for contributing?", 
"What are the test instructions?", 
"What license are you using?", 
"What is your GitHub username?", 
"What is your email?"];
const [title, description, installation, usage, contributions, testing, license, username, email] = questions; // Array deconstruction

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('File generated!')
    )
}

function init() {
    inquirer
  .prompt([
    {
        type: "input",
        name: "title",
        message: title
    },
    {
        type: "input",
        name: "description",
        message: description
    },
    {
        type: "input",
        name: "installation",
        message: installation
    },
    {
        type: "input",
        name: "usage",
        message: usage
    },
    {
        type: "input",
        name: "contributions",
        message: contributions
    },
    {
        type: "input",
        name: "testing",
        message: testing
    },
    {
        type: "list",
        name: "license",
        message: license,
        choices: []
    },
    {
        type: "input",
        name: "username",
        message: username
    },
    {
        tyoe: "inout",
        name: "email",
        message: email
    }
    ])
}

// Function call to initialize app
init();
