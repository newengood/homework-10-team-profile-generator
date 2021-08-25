// import inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');

// import html generator
const joinDivs = require("./src/template");

// import classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// create staff array
let staff = []

// add a mangager prompts
const addManager = () => {
    return inquirer.prompt([
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
    ])
    .then(answers => {
        const {teamManagerName, managerID, managerEmail, managerOfficeNumber} = answers;
        const manager = new Manager (teamManagerName, managerID, managerEmail, managerOfficeNumber)
        // add manager to staff
        staff.push(manager);
    })
};

// employee prompts
const addEmployee = () => {
    return inquirer.prompt([
        {
        type: 'list',
        name: 'employeeType',
        message: 'What type of employee are you adding?',
        choices: ['Engineer', 'Intern'],
        },
        {
        type: 'input',
        name: 'employeeName',
        message: 'What is the employees name?',
        },
        {
        type: 'input',
        name: 'employeeID',
        message: 'What is the employees ID?',
        },
        {
        type: 'input',
        name: 'employeeEmail',
        message: 'What is the employees email?',
        },
        {
        type: 'input',
        name: 'employeeGithub',
        message: 'What is Engineers Github username?',
        when: (input) => input.employeeType === "Engineer",
        },
        {
        type: 'input',
        name: 'employeeSchool',
        message: 'What school does the intern attend?',
        when: (input) => input.employeeType === "Intern",
        },
        {
        type: 'confirm',
        name: 'addAdditionalEmployee',
        message: 'Add additional employee?',
        },
    ])
    .then(answers => {
        const {employeeName, employeeID, employeeEmail, employeeGithub, employeeSchool, addAdditionalEmployee} = answers;

        // add engineer to staff
        if (answers.employeeType === "Engineer") {
            const engineer = new Engineer (employeeName, employeeID, employeeEmail, employeeGithub);
            staff.push(engineer);
        // add intern to staff
        } else if (answers.employeeType === "Intern") {
            const intern = new Intern (employeeName, employeeID, employeeEmail, employeeSchool);
            staff.push(intern);
        }
        // add additional employee if chosen
        if (answers.addAdditionalEmployee) {
            return addEmployee(staff);
        // return completed staff if chosen
        } else {
            return staff;
        }
    });
};

// start application
addManager()

// add employees
.then(addEmployee)

// create html
.then((staff) => {
    const htmlPageContent = joinDivs(staff);

    fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    )
  })
  .catch((error) => {
    console.error("There was a problem creating your index.html", error)
})