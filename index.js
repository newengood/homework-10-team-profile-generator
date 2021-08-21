const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require("./src/template")

inquirer
  .prompt([
    {
      type: 'input',
      name: 'teamManagerName',
      message: 'What is the team managers name?',
    },
    {
      type: 'input',
      name: 'managerID',
      message: 'What is the managers employee ID?',
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: 'What is the managers email address?',
    },
    {
      type: 'input',
      name: 'managerOfficeNumber',
      message: 'What is the manager office number?',
    },
    {
      type: 'list',
      name: 'employeeType',
      message: 'Add employee or exit',
      choices: ["Engineer", "Intern", "Finish and exit"],
    },
    // engineer prompts
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the Engineers name?',
        when: (input) => input.employeeType === "Engineer",
      },
      {
        type: 'input',
        name: 'engineerID',
        message: 'What is the Engineers ID?',
        when: (input) => input.employeeType === "Engineer",
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the Engineers email?',
        when: (input) => input.employeeType === "Engineer",
      },
      {
        type: 'input',
        name: 'engineerGithub',
        message: 'What is Engineers Github username?',
        when: (input) => input.employeeType === "Engineer",
      },
      // Intern Prompts
      {
        type: 'input',
        name: 'internName',
        message: 'What is the Interns name?',
        when: (input) => input.employeeType === "Intern",

      },
      {
        type: 'input',
        name: 'internID',
        message: 'What is the Interns ID?',
        when: (input) => input.employeeType === "Intern",
      },
      {
        type: 'input',
        name: 'internEmail',
        message: 'What is the Interns email?',
        when: (input) => input.employeeType === "Intern",
      },
      {
        type: 'input',
        name: 'internSchool',
        message: 'What school does the Intern attend?',
        when: (input) => input.employeeType === "Intern",
      },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
