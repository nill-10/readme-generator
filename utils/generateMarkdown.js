// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}


## Description
${data.Description}

## Table of content
- [Description](#Description)

`;
}

module.exports = generateMarkdown;
