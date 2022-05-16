// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


const generateMarkdown = require('./utils/generateMarkdown.js')
const generatePage = require('./src/page-template');

// TODO: Create an array of questions for user input
const questions = () => {
  
    return inquirer.prompt([

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
    //install, usage, conrtibutions, language, languages make confirms
    {
      type: 'input',
      name: 'install',
      message: 'Provide instructions for installing:'
    },   
   {
      type: 'input',
      name: 'usage',
      message: 'Describe the usage of this project:'
    },
    {
      type: 'input',
      name: 'cont',
      message: 'Who contributed to this project?'
    },
        
    {
      type: 'input',
      name: 'test',
      message: 'How was this project tested?'
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
    choices: ['Apache 2.0', 'Mozilla Public', 'MIT', 'Boost Software 1.0', 'The Unilicense ']
    // validate: nameInput => {
    //     if (nameInput) {
    //       return true;
    //     } else {
    //       console.log('Please select a license!');
    //       return false;
    //     }
    //   }
  },

    //questions for contact ask if email
    {
      type: 'confirm',
      name: 'confirmEmail',
      message: 'Would you like to provide your email so people can contact you about this project?',
      default: true
      },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
      when: ({ confirmEmail }) => {
        if (confirmEmail) {
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
      }
    }
])
.then(userResponse => {
    console.log(userResponse)
})
}
   



// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
        console.log("README.md file has been created!")
});
}




// // // TODO: Create a function to initialize app
// function init() {


// // // Function call to initialize app
questions()
