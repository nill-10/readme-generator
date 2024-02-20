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
<a href="https://app.screencastify.com/v3/watch/RiR6JqtNEWOFqEzxqVEF">Click here</a>


## License
the application is covered under ${data.License} .


## Contribution
${data.Contribution}


## Test
${data.Test}


## Questions
[GitHub profile](https://github.com/${data.Username})

For additional questions reach Me Via Email: ${data.Email}

`;
}

module.exports = generateMarkdown;
