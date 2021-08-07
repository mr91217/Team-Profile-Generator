const inquirer = require("inquirer");
const fs = require("fs");

// const generatePage = require('./src/page-template');


const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const Intern = require("./lib/intern")


//=============================== Logic Idea Reference from mattbeachey GITHUB ===============================//

const teamnameArray = [];
const managerArray = [];
const engineerArray = [];
const internsArray = [];



const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'teamname',
        message: 'Welcome to Team Generator! Please enter your team name:(Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your team name!');
              return false;
            }
        }
      }
    ])
    .then(function(data){
      const teamName = data.teamname
      teamnameArray.push(teamName)
      
  
      
  }) 
    
};

function addManager() {
    console.log(`
=================
Add a Manager
=================
`);
       inquirer.prompt([
        {
            type: "input",
            message: "Please enter team manager's name.",
            name: "name",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your manager name!');
                  return false;
                }
            }
        },
        {
            type: "input",
            message: "PLease enter team manager's email address.",
            name: "email",
            validate: mailInput => {
                if (mailInput) {
                  return true;
                } else {
                  console.log('Please enter an email address!');
                  return false;
                }
            }
        },

        {
            type: "number",
            message: "Please enter team manager's office number",
            name: "officeNumber",
            validate: numberInput => {
                if (numberInput) {
                  return true;
                } else {
                  console.log('Please enter a phone number!');
                  return false;
                }
            }
        },
    ])

    .then(function (data) {
        const name = data.name
        const id = managerArray.length + 1
        const email = data.email
        const officeNumber = data.officeNumber
        const managerMember = new Manager(name, id, email, officeNumber)
        managerArray.push(managerMember)
        addTeamMembers();
    });

}



function addEngineer() {
    console.log(`
=================
Add an Engineer
=================
`);
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
        const id = managerArray.length + 1
        const email = data.email
        const github = data.github
        const ENGMember = new Engineer(name, id, email, github)
        engineerArray.push(ENGMember)
        addTeamMembers()
    });

};

function addIntern () {
    console.log(`
=================
Add an Intern
=================
`);
  
// //   If there's no 'interns' array property, create one
//   if (!internData.interns) {
//     internData.interns = [];
//   }

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is this intern's name?",
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('You need to enter a name!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: "What is this intern's email address?",
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('You need to enter an email!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'school',
            message: "What is this intern's school?",
            validate: schoolInput => {
                if (schoolInput) {
                  return true;
                } else {
                  console.log('You need to enter a school!');
                  return false;
                }
            }
          },
          
    ]).then(function (data) {
        const name = data.name
        const id = engineerArray.length + 2
        const email = data.email
        const school = data.school
        const internMember = new Intern(name, id, email, school)
        internsArray.push(internMember)
        addTeamMembers()
    });
};




//=============================== Reference from mattbeachey GITHUB ===============================//
const addTeamMembers = () => {
    return inquirer.prompt([
       {
           type: "list",
           message: "Would you like to add more team members?",
           choices: ["Add a manager", "Add an engineer", "Add an intern", "No, I am finish!"],
           name: "addMemberData"
       }
   ])

       .then(function (data) {

           switch (data.addMemberData) {

               case "Add a manager":
                   addManager();
                   break;

               case "Add an engineer":
                   addEngineer();
                   break;

               case "Add an intern":
                   addIntern();
                   break;
               case "No, I am finish!":
                   generateTeamPage();
                   break;
           }
       });
}
//=============================== Reference from mattbeachey GITHUB ===============================//


const generateManager = function (managerArray) {
  var managerList =``;
  if (!managerArray[0])  return managerList;

  for( var i = 0; i < managerArray.length; i++){
  managerList += `
  <div class="col-4 mt-4" >
      <div class="card h-100">
          <div class="card-header" id="managercard">
              <h3>${managerArray[i].name}</h3>
              <h4>Manager</h4><i class="material-icons">content_paste</i>
          </div>

          <div class="card-body" id="managercard">
              <p class="id">ID: ${managerArray[i].id}</p>
              <p class="email">Email: <a href="mailto:${managerArray[i].email}">${managerArray[i].email}</a></p>
              <p class="office">Office Number: ${managerArray[i].officeNumber}</p>
          </div>

      </div>
  </div>
  `;
  }
  return managerList;
}

const generateEngineer = function (engineerArray) {
  var engineerList = ``;
  if (!engineerArray[0]) return engineerList;

  for (var i = 0; i < engineerArray.length; i++){
      engineerList += `
      <div class="col-4 mt-4">
          <div class="card h-100">
              <div class="card-header" id="ENGcard">
                  <h3>${engineerArray[i].name}</h3>
                  <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
              </div>

              <div class="card-body" id="ENGcard">
                  <p class="id">ID: ${engineerArray[i].id}</p>
                  <p class="email">Email: <a href="mailto:${engineerArray[i].email}">${engineerArray[i].email}</a></p>
                  <p class="github">Github: <a href="https://github.com/${engineerArray[i].github}">${engineerArray[i].github}</a></p>
              </div>

          </div>
      </div>
       `
}
  return engineerList;
}

const generateIntern = function (internsArray) {
  var internList = ``;
  if (!internsArray[0]) return internList;

  for (var i = 0; i < internsArray.length; i++) {
    internList += `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header" id="interncard">
                <h3>${internsArray[i].name}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
  
            <div class="card-body" id="interncard">
                <p class="id">ID: ${internsArray[i].id}</p>
                <p class="email">Email:<a href="mailto:${internsArray[i].email}">${internsArray[i].email}</a></p>
                <p class="school">School: ${internsArray[i].school}</p>
            </div>
      </div>
    </div>
    `;
  }
  return internList;
};

const generateTeamPage = function () {   
  const htmlArray = []
  const htmlBeginning = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${teamnameArray[0]}</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
        
        <div class="banner-bar">
          <h1>${teamnameArray[0]}</h1>
        </div>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center" id="team-cards">
                           
                ${generateManager(managerArray)}
                ${generateEngineer(engineerArray)}
                ${generateIntern(internsArray)}
            </div>
        </div>
    </main>
    
</body>
  </html>


`
htmlArray.push(htmlBeginning);
console.log(managerArray);
console.log(engineerArray);
console.log(internsArray);



fs.writeFile(`./dist/${teamnameArray[0]}.html`, htmlArray.join(""), function (err) {
      // if there is an error 
      if (err) {
        console.log(err);
        return;
      // when the profile has been created 
      } else {
        console.log("Your team profile has been successfully created! Please check out the index.html")
    }
})
}


// // function to generate HTML page file using file system 
// const writeFile = data => {
//   fs.writeFile('./dist/index.html', data, err => {
//       // if there is an error 
//       if (err) {
//           console.log(err);
//           return;
//       // when the profile has been created 
//       } else {
//           console.log("Your team profile has been successfully created! Please check out the index.html")
//       }
//   })
// };


promptUser()
    .then(addTeamMembers)
    // .then(managerArray => {
    //     return generateTeamPage(managerArray);
    // })
    // .then(engineerArray => {
    //   return generatePage(engineerArray);
    // })
    // .then(internsArray => {
    //   return generatePage(internsArray);
    // })
    // .then(pageHTML => {
    //     return writeFile(pageHTML);
    // })
    // .then(writeFileResponse => {
    //     console.log(writeFileResponse);
    //     return copyFile();
    // })
    // .then(copyFileResponse => {
    //     console.log(copyFileResponse);
    // })
    .catch(err => {
        console.log(err);
    });

