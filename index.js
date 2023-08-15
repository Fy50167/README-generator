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
const [title, description, installation, usage, credits, contributions, testing, license, username, email] = questions; // Array deconstruction

const licenses = ['Apache 2.0', 'BSD 3 Clause', 'BSD 2 Clause', 'GNU GPL v3', 'The MIT License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 1.0', 'GNU Affero General Public License 3.0',
'GNU Affero General Public License 2.0', 'Mozilla Public License 2.0', 'The Unlicense']

const licenseLinks = ['https://img.shields.io/badge/License-Apache_2.0-blue.svg', 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg', 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg',
'https://img.shields.io/badge/License-GPLv3-blue.svg', 'https://img.shields.io/badge/License-MIT-yellow.svg', 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg', 'https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg',
'https://img.shields.io/badge/License-EPL_1.0-red.svg', 'https://img.shields.io/badge/License-GPLv3-blue.svg', 'https://img.shields.io/badge/License-GPL_v2-blue.svg', 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
'https://img.shields.io/badge/license-Unlicense-blue.svg']

const licenseBadges = ['https://opensource.org/licenses/Apache-2.0', 'https://opensource.org/licenses/BSD-3-Clause', 'https://opensource.org/licenses/BSD-2-Clause', 'https://www.gnu.org/licenses/gpl-3.0',
'https://img.shields.io/badge/License-MIT-yellow.svg', 'https://www.boost.org/LICENSE_1_0.txt', 'http://creativecommons.org/publicdomain/zero/1.0/', 'https://opensource.org/licenses/EPL-1.0', 'https://www.gnu.org/licenses/gpl-3.0',
'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html', 'https://opensource.org/licenses/MPL-2.0', 'http://unlicense.org/']

const generateMarkdown = ({projectTitle, projectDescription, projectInstallation, projectCredits, projectUsage, projectContributions, projectTesting, projectLicense, projectUsername, projectEmail, projectLink, projectBadge}) =>
`[![License](${projectLink})](${projectBadge})

# ${projectTitle}

## Description

${projectDescription}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${projectInstallation}

## Usage

${projectUsage}

## Credits

${projectCredits}

## License

This project uses a ${projectLicense} license.

## How to Contribute

${projectContributions}

## Tests

${projectTesting}

## Questions

My GitHub profile: github.com/${projectUsername}.
For further questions, you can email me at ${projectEmail}.
`;

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
        name: "projectCredits",
        message: credits
    },
    {
        type: "input",
        name: "projectUsage",
        message: usage
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
        choices: licenses
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
        const licensePosition = licenses.indexOf(answers.projectLicense)
        let answersTemp = answers;
        answersTemp.projectLink = licenseLinks[licensePosition];
        answersTemp.projectBadge = licenseBadges[licensePosition];
        const markdownContent = generateMarkdown(answersTemp);
        writeToFile('README.md', markdownContent);
    } 
    )
}

// Function call to initialize app
init();
