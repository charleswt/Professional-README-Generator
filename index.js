// TODO: Include packages needed for this application
const { writeFile } = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown'); // Make sure to require your generateMarkdown file

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'list',
        message: 'License',
        name: 'license',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'None']
    },
    {
        type: 'input',
        message: 'Repository name',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Description',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Installation',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Usage',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'First name space last name',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Github handle',
        name: 'handle'
    },
    {
        type: 'input',
        message: 'Tests',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Your email',
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName = 'README.md', data) {
    writeFile(`./output/${fileName}`, generateMarkdown(data), (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('README.md created successfully.');
        }
    });
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('README.md', answers);
        })
        .catch((error) => {
            console.error('Error during inquirer prompt:', error);
        });
};

// Function call to initialize app
init();