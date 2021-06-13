// Starter file provided by Instructor (03/09/2021) AC
const path = require("path");
const fs = require("fs");

const inquirer = require("inquirer");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");



const render = require("./lib/htmlRenderer");

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
};

const employees = [];

const employeeRole = [
    {
        type: "list",
        name: "role",
        message: "Select team member's role",
        choices: [
            "Engineer",
            "Intern",
            "Manager",
            "There are no more employees to add.",
        ],
    },
];


// questions for managers
const questionsManagers = [
    {
        type: "input",
        message: "Employee's name:",
        name: "name"
    },
    {
        type: "input",
        message: "Employee's ID number:",
        name: "id",
    },
    {
        type: "input",
        message: "Employee's email:",
        name: "email",
    },
    {
        type: "input",
        message: "Employee's office phone number:",
        name: "officePhoneNumber",
    },
];

// questions for interns
const questionsInterns = [
    {
        type: "input",
        message: "Emmployee's name:",
        name: "name"
    },
    {
        type: "input",
        message: "Employee's ID number:",
        name: "id",
    },
    {
        type: "input",
        message: "Employee's email:",
        name: "email",
    },
    {
        type: "input",
        message: "Employee's school:",
        name: "school",
    },
];

// questions for engineers
const questionsEngineers = [
    {
        type: "input",
        message: "Emmployee's name:",
        name: "name"
    },
    {
        type: "input",
        message: "Employee's ID number:",
        name: "id",
    },
    {
        type: "input",
        message: "Employee's email:",
        name: "email",
    },
    {
        type: "input",
        message: "Employee's GitHub username:",
        name: "gitHub",
    },
];

// inquirer prompts

const initTeam = () => {
    inquirer.prompt(employeeRole)
        .then(generateTeam);
};

//  generateTeam function 

const generateTeam = (response) => {
    if (response.role === "Manager") {
        inquirer.prompt(questionsManagers)
            .then(function (choice) {
                const newManager = new Manager(
                    choice.name,
                    choice.id,
                    choice.email,
                    choice.officePhoneNumber
                );
                employees.push(newManager);
                console.log("A new manager was added to your team.");
                initTeam();
            }
            )
    } else if (response.role === "Intern") {
        inquirer.prompt(questionsInterns)
            .then(function (choice) {
                const newIntern = new Intern(
                    choice.name,
                    choice.id,
                    choice.email,
                    choice.school
                );
                employees.push(newIntern);
                console.log("A new intern was added to your team.");
                initTeam();

            })
    } else if (response.role === "Engineer") {
        inquirer.prompt(questionsEngineers)
            .then(function (choice) {
                const newEngineer = new Engineer(
                    choice.name,
                    choice.id,
                    choice.email,
                    choice.gitHub
                );
                employees.push(newEngineer);
                console.log("A new engineer was added to your team.");
                initTeam();
            })
    } else {
        fs.writeFile(outputPath, render(employees), (err) => {
            if (err) throw err;
            console.log("Your new team is complete. View in the team.html file within the output folder.");
        });
    }
};

initTeam();
