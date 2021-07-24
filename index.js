// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const writeFile = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message:'What is your name?',
        name: 'name'
    },
    {
       type:'input',
       message:'What is your project?',
       name:'title'
    },
    {
        type:'input',
        message:'How would you describe your project?',
        name:'description'
    },
    {
        type:'input',
        message:'How do you install your app?',
        name:'installation'
    },
    {
        type:'input',
        message:'What can your app be used for?',
        name:'usage'
    },
    {
        type:'input',
        message:'What are your contribution guidelines?',
        name:'contribution'
    },
    {
        type:'input',
        message:'How do you test your app?',
        name:'test'
    },
    {
        type:'list',
        message:'Which license does your app use?',
        choices:['MIT', 'GNU', 'Apache', 'GPL', 'None'],
        name:'license'
    },
    {
        type:'input',
        message:'What is your Github page?',
        name:'github'
    }
];

// TODO: Create a function to write README file
function createFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// create function to initialize
function init() {
    inquirer.prompt(questions)
        .then(responses => {
            createFile('README.md', writeFile({ ...responses }));
        });
}

// Function call to initialize app
init();