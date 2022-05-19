// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license == 'Apache 2.0'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
}
if (license == 'Mozilla Public'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
}
if (license == 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
}
if (license == 'Boost Software 1.0'){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
}
if (license == 'The Unilicense'){
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
}
if (license == ''){
    return ``
}
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license == 'Apache 2.0'){
        return `(https://opensource.org/licenses/Apache-2.0)`
    }
    if (license == 'Mozilla Public'){
        return `(https://opensource.org/licenses/MPL-2.0)`
    }
    if (license == 'MIT'){
        return `(https://opensource.org/licenses/MIT)`
    }
    if (license == 'Boost Software 1.0'){
        return `(https://www.boost.org/LICENSE_1_0.txt)`
    }
    if (license == 'The Unilicense'){
        return `(http://unlicense.org/)`
    }
    if (license == ''){
        return ``
    }
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == `${license}`) {
  return `${license}`
}
        if (license == ''){
            return ``
        }
}



// //if optional fields are excluded, this will not generate the excluded fields


// const  generateInstall = installInput => {
//     if (!installInput) {
//         return '';
//     }
//     return `
//     ## Installation
//     ${installInput}
//     `
// };
// console.log(generateInstall);



// const  generateUsage = installUsage => {
//     if (!installUsage) {
//         return '';
//     }
//     return `
//     ## Usage
//     ${installUsage}   
//     `
// };
// console.log(generateUsage);

// const  generateTest = installTest => {
//     if (!installTest) {
//         return '';
//     }
//     return `
//     ## Tests
//     ${installTest}   
//     `
// };
// console.log(generateTest);

// const  generateContributions = installContributions => {
//     if (!installContributions) {
//         return '';
//     }
//     return `
//     ## Contribution
//     ${installContributions}   
//     `
// };
// console.log(generateContributions);


// //languages .. need to figure out how to list these if more than one selected
// const  generateBuilt = installBuilt => {
//     if (!installBuilt) {
//         return '';
//     }
//     return `
//     ## Built with
//     ${installBuilt}   
//     `
// };
// console.log(generateBuilt);



// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}   

${renderLicenseBadge(data.license)}

## Table of Contents

## Description 
${data.description}

## Installation Instructions  ex
${data.install}

## Usage    EXCLUDE
${data.usage}

## Tests   EXCLUDE
${data.test}

## Contributions   
${data.cont}

## Built With   
${data.languages}

## License  
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Questions
Please contact me for more information @ <${data.email}> 
or visit link to github [GitHub](https://github.com/${data.github})

## Made with ❤️️ by ${data.name}
 `;
}

module.exports = generateMarkdown;





