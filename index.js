// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')



// TODO: Create an array of questions for user input
const promptUser = [
      
    //name required
{
type: 'input',
name: 'name',
message: 'What is your name?',
validate: nameInput => {
  if (nameInput) {
    return true;
  } else {
    console.log('Please enter your name!');
    return false;
  }
}
},
  //github required
{
type: 'input',
name: 'github',
message: 'Enter your GitHub Username',
validate: nameInput => {
  if (nameInput) {
    return true;
  } else {
    console.log('Please enter your GitHub username!');
    return false;
  }
}
},
  //title required
{
type: 'input',
name: 'title',
message: 'Title of this project:',
validate: nameInput => {
  if (nameInput) {
    return true;
  } else {
    console.log('Please enter the project title!');
    return false;
  }
}
},
      //description required
{
  type: 'input',
  name: 'description',
  message: 'Provide a description of this project:',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter the project description!');
      return false;
    }
  }
},

{
  type: 'input',
  name: 'install',
  message: 'Provide instructions for installing:',
 
},   


{
  type: 'input',
  name: 'usage',
  message: 'Describe the usage of this project:',

},


{
  type: 'input',
  name: 'cont',
  message: 'Who contributed to this project?',

},

{
  type: 'input',
  name: 'test',
  message: 'How was this project tested?', 

},
  //license required
{
type: 'list',
name: 'license',
message: 'Please select a license or licenses for this project',
//change choice type and have to submit one only?
choices: ['Apache 2.0', 'Mozilla Public', 'MIT', 'Boost Software 1.0', 'The Unilicense']
},
  //email required
{
  type: 'input',
  name: 'email',
  message: 'Enter your email address:',
  validate: emailInput => {
    if (emailInput) {
      return true;
    } else {
      console.log('Please enter your email address!');
      return false;
    }
  }
}
];

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          return console.log(err);
        }
        console.log("README.md file has been created!")
});
};

// // // TODO: Create a function to initialize app
 function init() {
inquirer.prompt(promptUser)
.then(function (userInput) {
  console.log(userInput)
  writeToFile("./dist/README.md", generateMarkdown(userInput));
});
 };

// // // Function call to initialize app
init();
