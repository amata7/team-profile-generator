const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

let init = function () {
  inquirer
    .prompt([
      {
        type: "input",
        message: "[Manager] What is your name?",
        name: "managerName",
      },
      {
        type: "input",
        message: "[Manager] What is your employee ID?",
        name: "managerId",
      },
      {
        type: "input",
        message: "[Manager] What is your email address?",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "[Manager] What is your office number?",
        name: "officeNum",
      },
    ])
    .then((answers) => {
      const empName = answers.managerName;
      const id = answers.managerId;
      const email = answers.managerEmail;
      const officeNum = answers.officeNum;
      const theMan = new Manager(empName, id, email, officeNum);
      console.log(theMan);
      endPrompt(answers);
    });
};

let endPrompt = function (answers) {
  const filename = "./dist/index.html";
  const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="./reset.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body class='container'>
        <header class='bg-success '>
            <h1 class='text-white '>My Team</h1>
        </header>
        <main class='row'>
    
            <div class="card col-auto mx-auto" style="width: 18rem;">
                <h3 class="text-white card-header bg-danger">${answers.nameMng}</h3>
                <h4 class="text-white bg-danger card-header mb-2">Manager</h4>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID Number: ${answers.idMng} </li>
                  <li class="list-group-item">Email Address: 
                    <a href="mailto:${answers.email}">${answers.emailMng}</a>
                  </li>
                  <li class="list-group-item">Office Number: ${answers.officeNum}</li>
                </ul>
              </div>
    
              <div class="card col-auto mx-auto" style="width: 18rem;">
                <h3 class="text-white card-header bg-danger">${answers.nameEng}</h3>
                <h4 class="text-white bg-danger card-header mb-2">Engineer</h4>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID Number: ${answers.idEng} </li>
                  <li class="list-group-item">Email Address: 
                    <a href="mailto:${answers.email}">${answers.emailEng}</a>
                  </li>
                  <li class="list-group-item">GitHub: 
                    <a href="https://github.com/${answers.github}">${answers.github}</a>
                  </li>
                </ul>
              </div>
              
              <div class="card col-auto mx-auto" style="width: 18rem;">
                <h3 class="text-white card-header bg-danger">${answers.nameInt}</h3>
                <h4 class="text-white bg-danger card-header mb-2">Intern</h4>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID Number: ${answers.idInt} </li>
                  <li class="list-group-item">Email Address: 
                    <a href="mailto:${answers.email}">${answers.emailInt}</a>
                  </li>
                  <li class="list-group-item">School: ${answers.school}</li>
                </ul>
              </div>
    
        </main>
    </body>
    </html>`;

  fs.writeFile(filename, html, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
};

init();
