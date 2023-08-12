const inquirer = require('inquirer');
const fs = require('fs');

const questions = ['What is your project title?', 
'Enter a description for your project.', 
"What are the application's installation instructions?", 
"How is the application used?", 
"Who else contributed to this project?",
"What are the guidelines for contributing?", 
"What are the test instructions?", 
"What license are you using?", 
"What is your GitHub username?", 
"What is your email?"];
const [title, description, installation, usage, contributors, contributions, testing, license, username, email] = questions; // Array deconstruction

const generateMarkdown = ({projectTitle, projectDescription, projectInstallation, projectCredits, projectUsage, projectContributions, projectTesting, projectLicense, projectUsername, projectEmail}) =>
    `# ${projectTitle} 

    ## Description
    
    ${projectDescription}
    
    ## Table of Contents
    
    If your README is long, add a table of contents to make it easy for users to find what they need.
    
    - [Installation]
    - [Usage]
    - [Credits]
    - [License]
    
    ## Installation
    
    ${projectInstallation}
    
    ## Usage
    
    ${projectUsage}
    
    ## Credits
    
    ${projectCredits}
    
    ## License
    
    ${projectLicense}
    
    ## How to Contribute
    
    ${projectContributions}

    ## Tests
    
   ${projectTesting}

   ## Contact Information

   ${projectUsername}
   ${projectEmail}
   `;

function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data), (err) =>
    err ? console.error(err) : console.log('File generated!')
    )
}

function init() {
    inquirer
  .prompt([
    {
        type: "input",
        name: "projectTitle",
        message: title
    },
    {
        type: "input",
        name: "projectDescription",
        message: description
    },
    {
        type: "input",
        name: "projectInstallation",
        message: installation
    },
    {
        type: "input",
        name: "projectUsage",
        message: usage
    },
    {
        type: "input",
        name: "projectContributors",
        message: contributors
    },
    {
        type: "input",
        name: "projectContributions",
        message: contributions
    },
    {
        type: "input",
        name: "projectTesting",
        message: testing
    },
    {
        type: "list",
        name: "projectLicense",
        message: license,
        choices: ['License 1', 'License 2']
    },
    {
        type: "input",
        name: "projectUsername",
        message: username
    },
    {
        tyoe: "input",
        name: "projectEmail",
        message: email
    }
    ])
    .then((answers) => {
        console.log(answers);
        const markdownContent = generateMarkdown(answers);
        writeToFile('README.md', markdownContent);
    } 
    )
}

// Function call to initialize app
init();
