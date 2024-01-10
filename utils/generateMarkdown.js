// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (data.license === 'Apache-2.0') {
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if (data.license === 'GPL-3.0') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === 'MIT' || `Apache-2.0` || `GPL-3.0`) {
    return `[MIT License]https://github.com/${data.handle}/${data.title}/blob/main/LICENSE)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license) {
    return `## License

This project is licensed under the ${data.license} License. See the [LICENSE](${renderLicenseLink(data.license)}) file for details.`;
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description

  ${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

  ${data.installation}

## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

## Contributing

  This project was developed by [${data.name}](https://github.com/${data.handle}/).

## Tests

  ${data.tests}

## Questions

If you have any questions or suggestions, feel free to email me.
  ${data.email}

`;
}

module.exports = generateMarkdown;
