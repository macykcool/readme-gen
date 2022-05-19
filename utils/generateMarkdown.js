// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

// `;
}



// THEN a high-quality, professional README.md is generated 
// with the title of my project and sections entitled 
// Description, Table of Contents, Installation, Usage, License, 
// Contributing, Tests, and Questions


//if optional fields are excluded, this will not generate the excluded fields
const  generateInstall = installInput => {
    if (!installInput) {
        return '';
    }
    return `
    ## Installation
    ${installInput}
    `
};
console.log(generateInstall);



const  generateUsage = installUsage => {
    if (!installUsage) {
        return '';
    }
    return `
    ## Usage
    ${installUsage}   
    `
};
console.log(generateUsage);

const  generateContributions = installContributions => {
    if (!installContributions) {
        return '';
    }
    return `
    ## Contribution
    ${installContributions}   
    `
};
console.log(generateContributions);

const  generateTest = installTest => {
    if (!installTest) {
        return '';
    }
    return `
    ## Tests
    ${installTest}   
    `
};
console.log(generateTest);


//languages .. need to figure out how to list these if more than one selected
const  generateBuilt = installBuilt => {
    if (!installBuilt) {
        return '';
    }
    return `
    ## Built with
    ${installBuilt}   
    `
};
console.log(generateBuilt);



const generateReadme = installReadme => {
    if (!installReadme) {
        return '';
    }
    return `

## ${title}   

## Description 
${description}

## Table of Contents

## Installation Instructions  EXCLUDE
${install}

## Usage    EXCLUDE
${usage}

## Contributions   

##Licenses MANDATORY
${license}

## Badges
${cont}

##Tests   EXCLUDE
${test}

##Built With   
${languages}

## Made with ❤️️ by ${name}

##Questions
Please contact me for more information @ ${email} 
or visit link to github ${github}

    `
};
console.log(generateReadme);



module.exports = generateMarkdown;