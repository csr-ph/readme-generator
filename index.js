// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const writeFile = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    
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
        message:'How do you install your app?',
        name:'installation'
    },
    {
        type:'input',
        message:'How do you use your app?',
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
    ])
    .then(data => {
        return data;
    })
};
// TODO: Create a function to write README file
fs.writeFile('README.md', '', function(err){
    if (err) throw err;
});

// Function call to initialize app
init();