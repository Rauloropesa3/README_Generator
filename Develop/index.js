// imports
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeToFileAsync = util.promisify(fs.writeFile);


// array of questions for user
function promptUser() {
    return inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "Title"
    },
    {
        type: "input",
        message: "Give a brief description of your project.",
        name: "Description"

    },
    {
        type: "input",
        message: "What necessary dependencies must be installed to run this app?",
        name: "Installation"
    },
    {
        type: "input",
        message: "What is this application used for?",
        name: "Usage"
    },
    {
        type: "list",
        message: "What license was used for this README?",
        name: "License",
        choices: ['MIT','GPL','Apache','Monzilla','IBM','Unlicensed']
        
    },
    
    {
        type: "input",
        message: "How can others contribute?",
        name: "Contributing"
    },
    {
        type: "input",
        message: "What command do you use to test this Application?",
        name: "Test"
    },
    {
        type: "input",
        message: "Enter your Github UserName",
        name: "GithubUserName"
    },
    {
        type: "input",
        message: "Enter your Github profile link",
        name: "GithubProfileLink"
    },
    {
        type: "input",
        message: "Enter your email",
        name: "Questions"
    }
    
]);

}

// function to write README file
function generateMarkdown(response){
    return ` 
# ${response.Title}

![License](https://img.shields.io/badge/LICENSE-${response.License}-GREEN)
    
## Description
----
${response.Description}
    
## Table of content
----
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributors](#Contributors)
* [Test](#Test)
* [GitHub Info](#Questions) 
    
## Installations
----
${response.Installation}
    
## Usage
----
${response.Usage}
    
## License
----
For more informtion about the License, click on the link below:

https://opensource.org/license/>

## Contributing
----
${response.Contributing}
    
## Test
----
${response.Test}
    
## Questions
----
For questions about the Generator you can visit my 
Github page, just follow the link:

***${response.GithubUserName}:*** <https://api.github.com/users/${response.GithubProfileLink}>

>Feel free to contact me via email if you have any additional questions: **${response.Questions}**
    
    `;
}


// function to initialize program
    async function init() {
        try{
            const response = await promptUser();
            const readMe = generateMarkdown(response);
            await writeToFileAsync("README.md", readMe);
            console.log("success");
        } catch (err){
            console.log(err);
            
            }
            
        
    }

            
// function call to initialize program   
    init();
    
