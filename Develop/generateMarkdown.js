
// Returns a license badge based on which license is passed in. If there is no license, return an empty string.

function renderLicenseBadge(license) {

  if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }

  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }

  if (license === 'IBM') {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  }

  if (license === 'Mozilla') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }

  if (license === 'Other') {
    return ""

  }
  if (license === ' None') {
    return ""

  }

}

// Returns the corresponding link when a license is selected. Will return an empty sting if no license is selected or 'Other' is selected.
function renderLicenseLink(license) {

  if (license === 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0'
  }

  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  }

  if (license === 'IBM') {
    return 'https://opensource.org/licenses/IPL-1.0'
  }

  if (license === 'Mozilla') {
    return 'https://opensource.org/licenses/MPL-2.0'
  }

  if (license === 'Other') {
    return ""

  }
  if (license === ' None') {
    return ""

  }
}


// TODO: Create a function to generate markdown for README


function generateMarkdown(response) {

  return `# ${response.title}

  ${renderLicenseBadge(response.license)}

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

  [${response.license}](${renderLicenseLink(response.license)})
  
  ## Questions
  
  - Email: ${response.email}
  - GitHub: https://github.com/${response.username}
`
}


// Exports README information to index.js file

module.exports = {

  generateMarkdown
}
