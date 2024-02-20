// function to generate markdown for README
function generateMarkdown(data) {
  return `![${data.License}](https://img.shields.io/github/languages/top/lernantino/badmath)# ${data.Title}


## Description
${data.Description}

## Table of content
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Test](#Test)
- [Github Username](#Github Username)
- [Email](#Email)

## Installation
${data.Installation}

## Usage
${data.Usage}

## License
### the application is covered under ${data.License} License.


## Contributing
${data.Contribution}

## Test
${data.Test}

## Questions
### You can reach me on :
[GitHub profile](https://github.com/${data.Username})
### Email address : ${data.Email}

`;
}

module.exports = generateMarkdown;
