
// THEN a high-quality, professional README.md is generated 
// with the title of my project and sections entitled 
// Description, Table of Contents, Installation, Usage, License, 
// Contributing, Tests, and Questions

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