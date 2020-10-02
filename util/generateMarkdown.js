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
This repo is covered under the ${data.license} license. 
For more information on licenses with github please see [https://choosealicense.com/](https://choosealicense.com/)

### Contributing
${data.contributing}

### Tests
${data.tests}

### Questions 

You can access my github profile at ["https://github.com/${data.github}"]

You can also contact me through my email: ${data.email}


`;
}

module.exports = generateMarkdown;
