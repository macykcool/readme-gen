// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')



// TODO: Create an array of questions for user input
const promptUser = [
  // return inquirer.prompt([
      
      
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
//install, usage, contributions, testing, language

{
  type: 'confirm',
  name: 'confirmInstall',
  message: 'Would you like to add installation instructions?',
  default: true
},
{
  type: 'input',
  name: 'install',
  message: 'Provide instructions for installing:',
  when: ({ confirmInstall }) => {
    if (confirmInstall) {
      return true;
    } else {
      return false;
    }
  }
},   
{
  type: 'confirm',
  name: 'confirmUsage',
  message: 'Would you like to add information on usage?',
  default: true
},

{
  type: 'input',
  name: 'usage',
  message: 'Describe the usage of this project:',
  when: ({ confirmUsage }) => {
    if (confirmUsage) {
      return true;
    } else {
      return false;
    }
}
},

{
type: 'confirm',
name: 'confirmCont',
message: 'Would you like to add information about contributions?',
default: true
},
{
  type: 'input',
  name: 'cont',
  message: 'Who contributed to this project?',
  when: ({ confirmCont }) => {
    if (confirmCont) {
      return true;
    } else {
      return false;
    }
}
},
{
  type: 'confirm',
  name: 'confirmTest',
  message: 'Would you like to add information about testing?',
  default: true
},
{
  type: 'input',
  name: 'test',
  message: 'How was this project tested?', 
  when: ({ confirmTest }) => {
    if (confirmTest) {
      return true;
    } else {
      return false;
    }
}
},


{
  type: 'checkbox',
  name: 'languages',
  message: 'What did you build this project with? (Check all that apply)',
  choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
},

  //license required
{
type: 'checkbox',
name: 'license',
message: 'Please select a license or licenses for this project',
choices: ['Apache 2.0', 'Mozilla Public', 'MIT', 'Boost Software 1.0', 'The Unilicense']
// validate: nameInput => {
//     if (nameInput) {
//       return true;
//     } else {
//       console.log('Please select a license!');
//       return false;
//     }
//   }
},

//questions for contact email

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
},
];

// .then(userResponse => {
//   console.log(userResponse)
// })



// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
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
  writeToFile("README.md", generateMarkdown(userInput));
});
 };




// // // Function call to initialize app
init();
