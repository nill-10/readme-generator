// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}


## Description
${data.Description}


## Table of content
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contribution](#Contribution)
- [Test](#Test)
- [Questions](#Questions)


## Installation
${data.Installation}


## Usage
${data.Usage}


## License
the application is covered under ${data.License} License.


## Contribution
${data.Contribution}


## Test
${data.Test}


## Questions
[GitHub profile](https://github.com/${data.Username})

For additional question reach Me Via Email: ${data.Email}

`;
}

module.exports = generateMarkdown;
