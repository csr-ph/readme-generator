// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
inquirer.prompt([
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
    }
]) 
const template = `
    ## ${installation}

    ## ${usage}
    
    ## ${contribution}
    
    ## ${test}
    
    ## ${license}`
// TODO: Create a function to write README file
function writeToFile(title, data, err) {
    fs.writeFile(title, )
    if (err) throw err;
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
