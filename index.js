const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const Intern = require("./lib/intern")

let finalTeamArray = [];


function startingPrompt() {
    inquirer.prompt([
        {
            type: "input",
            message: "Welcome to Team Generator! Please enter your team name:",
            name: "teamname"
        }
    ])
        .then(function(data){
            const teamName = data.teamname
            finalTeamArray.push(teamName)
            addManager();
        })

    
}

function addManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter team manager's name.",
            name: "name"
        },
        {
            type: "input",
            message: "PLease enter team manager's email address.",
            name: "email"
        },

        {
            type: "number",
            message: "Please enter team manager's office number",
            name: "officeNumber"
        },
    ])

        .then(function (data) {
            const name = data.name
            const id = 1
            const email = data.email
            const officeNumber = data.officeNumber
            const teamMember = new Manager(name, id, email, officeNumber)
            finalTeamArray.push(teamMember)
            addTeamMembers();
        });

}

function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["Add an engineer", "Add an intern", "No, I am finish!"],
            name: "addMemberData"
        }
    ])

        .then(function (data) {

            switch (data.addMemberData) {
                case "Add an engineer":
                    addEngineer();
                    break;

                case "Add an intern":
                    addIntern();
                    break;
                case "No, I am finish!":
                    compileTeam();
                    break;
            }
        });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter engineer's name.",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter engineer's email address.",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter engineer's Github profile.",
            name: "github"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = finalTeamArray.length 
            const email = data.email
            const github = data.github
            const teamMember = new Engineer(name, id, email, github)
            finalTeamArray.push(teamMember)
            addTeamMembers()
        });

};

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter intern's name.",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter intern's email address.",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter intern's school",
            name: "school"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = finalTeamArray.length 
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            finalTeamArray.push(teamMember)
            addTeamMembers()
        });

};

function compileTeam() {
    console.log("COMPLETE!")

    const htmlArray = []
    const htmlBeginning = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${finalTeamArray[0]}</title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <div class="banner-bar">
        <h1>${finalTeamArray[0]}</h1>
    </div>
    <div class="card-container">
    `
    htmlArray.push(htmlBeginning);

    for (let i = 1; i < finalTeamArray.length; i++) {
        let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${finalTeamArray[i].name}</h2>
                <h2>${finalTeamArray[i].title}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${finalTeamArray[i].id}</p>
                <p>Email: <a href="mailto:${finalTeamArray[i].email}">${finalTeamArray[i].email}</a>></p>
        `
        if (finalTeamArray[i].officeNumber) {
            object += `
            <p>${finalTeamArray[i].officeNumber}</p>
            `
        }
        if (finalTeamArray[i].github) {
            object += `
            <p>GitHub: <a href="https://github.com/${finalTeamArray[i].github}">${finalTeamArray[i].github}</a></p>
            `
        }
        if (finalTeamArray[i].school) {
            object += `
            <p>School: ${finalTeamArray[i].school}</p>
            `
        }
        object += `
        </div>
        </div>
        `
        htmlArray.push(object)
    }

    const htmlEnd = `
    </div>
    </body>
    </html>
    `
    htmlArray.push(htmlEnd);

    fs.writeFile(`./dist/${finalTeamArray[0]}.html`, htmlArray.join(""), function (err) {
        
    })
}

startingPrompt()

