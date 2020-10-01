// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![licensebadge](https://img.shields.io/badge/license-${data.license}-brightgreen)


### Description 
${data.description}

### Table of Contents
* [Installation] (#installation)
* [Usage] (#usage)
* [Credits] (#credits)
* [License] (#license)


### Installation
${data.installation}

### Usage
${data.usage}

### License
${data.license}

### Contributing
${data.contributing}

### Tests
${data.tests}




`;
}

module.exports = generateMarkdown;
