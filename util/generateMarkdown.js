// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![licensebadge](https://img.shields.io/badge/license-${data.license}-brightgreen)


### Description 
${data.description}


`;
}

module.exports = generateMarkdown;
