const fs = require("fs");
// const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// function to initialize program
function init() {
    inquirer
    .prompt([
        {
            type : 'input',
            name : 'Title',
            message : 'what is The title of the project ?',
        },
        {
            type : 'input',
            name : 'Description',
            message : 'what is the description of the project?',
        },
       
        {
            type : 'input',
            name : 'Installation',
            message : 'what is the installation instructions of the project?',
        },
        {
            type : 'input',
            name : 'Usage',
            message : 'what is usage information of the project?',
        },
        {
            type : 'list',
            message : 'what is the license for the application?',
            name : 'License',
            choices: ['Apache License 2.0', 'BSD Licenses (Berkeley Software Distribution)','Creative Commons Licenses','Mozilla Public License 2.0','GNU Lesser General Public License (LGPL)','Eclipse Public License (EPL)','ISC License','telekinesis'],
        },
        {
            type : 'input',
            name : 'Contribution',
            message : 'what is contribution guidelines of the project?',
        },
        {
            type : 'input',
            name : 'Test',
            message : 'what is test instructions of the project?',
        },
        {
            type : 'input',
            name : 'Username',
            message : 'what is your github username?',
        },
        {
            type : 'input',
            name : 'Email',
            message : 'what is your email address?',
        },
     
    ])
    .then((data) => {
        console.log(data);
        fs.writeFile("README.md",generateMarkdown(data),(err) =>
        err ? console.error(err) : console.log('successfully Generated'))
    });
        
};

// function call to initialize program 
init();
