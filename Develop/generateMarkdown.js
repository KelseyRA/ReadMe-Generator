
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  const badges = {
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    IBM: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
    Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
  return badges(license);
}
// ${this.renderLicenseBadge(response.license)}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README

function generateMarkdown(response) {
  return `# ${response.title}
  ![badge](https://img.shields.io/badge/license-${response.license}-brightgreen)

  ## Table of Content
  
  - [Project Description](#Description)
  - [Usage](#Usage)
  - [Contributors](#Contributors)
  - [Installation](#Installation)
  - [License](#License)
  - [Questions](#Questions)
  
  ## Description
  ${response.description}
  
  ## Usage
  
  ${response.usage}
  
  ## Installation
  
  ${response.installation}

  ## Tests

  ${response.test}
  
  ## Contributors
  
  ${response.contribution}

  ## License

  ${response.license}
  
  ## Questions
  
  - [Email:] (${response.email})
  - [GitHub:] (https://github.com/${response.username})
`
}


module.exports = {
  generateMarkdown
}