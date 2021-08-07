// create Manager card
const generateManager = function (managerArray) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${managerArray.name}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${managerArray.id}</p>
                <p class="email">Email: <a href="mailto:${managerArray.email}">${managerArray.email}</a></p>
                <p class="office">Office Number: ${managerArray.officeNumber}</p>
            </div>

        </div>
    </div>
    `;
}

// create Engineer card
const generateEngineer = function (engineerArray) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineerArray.name}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${engineerArray.id}</p>
                <p class="email">Email: <a href="mailto:${engineerArray.email}">${engineerArray.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineerArray.github}">${engineerArray.github}</a></p>
            </div>

        </div>
    </div>
    `
}

// create Intern card 
const generateIntern = function (internsArray) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${internsArray.name}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${internsArray.id}</p>
                <p class="email">Email:<a href="mailto:${internsArray.email}">${internsArray.email}</a></p>
                <p class="school">School: ${internsArray.school}</p>
            </div>
    </div>
</div>
    `
};

// push array to page 
// generatePage = (data) => {

//     // array for cards 
//     pageArray = []; 

//     for (let i = 0; i < data.length; i++) {
//         const employee = data[i];
//         const role = employee.getRole(); 


//         // call manager function
//         if (role === 'Manager') {
//             const managerCard = generateManager(employee);

//             pageArray.push(managerCard);
//         }

//         // call engineer function
//         if (role === 'Engineer') {
//             const engineerCard = generateEngineer(employee);

//             pageArray.push(engineerCard);
//         }

//         // call intern function 
//         if (role === 'Intern') {
//             const internCard = generateIntern(employee);

//             pageArray.push(internCard);
//         }
        
//     }

//     // joining strings 
//     const employeeCards = pageArray.join('')

//     // return to generated page
//     const generateTeam = generateTeamPage(employeeCards); 
//     return generateTeam;

// }

// generate html page 
const generateTeamPage = function () {   
    
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
  
  
  `;
}



// module.exports = generatePage;




















































// function generatePage(templateData) {
//     console.log("COMPLETE!");
//     console.log(templateData);

//     const {interns, about, ...header } = templateData;

//     const htmlArray = []
//     const htmlBeginning = `
//     <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>${header.name}</title>
//     <link rel="stylesheet" href="./style.css">
// </head>

// <body>
//     <div class="banner-bar">
//         <h1>${header.name}</h1>
//     </div>
//     <div class="card-container">
//     `
//     htmlArray.push(htmlBeginning);

//     for (let i = 1; i < finalTeamArray.length; i++) {
//         let object = `
//         <div class="member-card">
//             <div class="card-top">
//                 <h2>${finalTeamArray[i].name}</h2>
//                 <h2>${finalTeamArray[i].title}</h2>
//             </div>
//             <div class="card-bottom">
//                 <p>Employee ID: ${finalTeamArray[i].id}</p>
//                 <p>Email: <a href="mailto:${finalTeamArray[i].email}">${finalTeamArray[i].email}</a>></p>
//         `
//         if (finalTeamArray[i].officeNumber) {
//             object += `
//             <p>${finalTeamArray[i].officeNumber}</p>
//             `
//         }
//         if (finalTeamArray[i].github) {
//             object += `
//             <p>GitHub: <a href="https://github.com/${finalTeamArray[i].github}">${finalTeamArray[i].github}</a></p>
//             `
//         }
//         if (finalTeamArray[i].school) {
//             object += `
//             <p>School: ${finalTeamArray[i].school}</p>
//             `
//         }
//         object += `
//         </div>
//         </div>
//         `
//         htmlArray.push(object)
//     }

//     const htmlEnd = `
//     </div>
//     </body>
//     </html>
//     `
//     htmlArray.push(htmlEnd);

//     fs.writeFile(`./dist/${finalTeamArray[0]}.html`, htmlArray.join(""), function (err) {
        
//     })
// }

// module.exports = generatePage;
