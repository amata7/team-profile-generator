const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt ([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your employee ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your email adress?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'officeNum',
        },
    ])
    .then((answers) =>{
        console.log(answers);
        const filename = './dist/index2.html'
        
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
            <main>
        
                <div class="card" style="width: 18rem;">
                    <h3 class="text-white card-header bg-danger">${answers.name}</h3>
                    <h4 class="text-white bg-danger card-header mb-2">manager role</h4>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID Number: ${answers.id} </li>
                      <li class="list-group-item">Email Address: 
                        <a href="mailto:${answers.email}">${answers.email}</a>
                      </li>
                      
                      <li class="list-group-item">Office Number: ${answers.officeNum}</li>
                    </ul>
                  </div>
        
        
        
                  <!-- <div class="card" style="width: 18rem;">
                    <h3 class="text-white card-header bg-danger">Name Goes here</h3>
                    <h4 class="text-white bg-danger card-header mb-2">engineer role</h4>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID Number: </li>
                      <li class="list-group-item">Email Address: </li>
                      <li class="list-group-item">GitHub: </li>
                    </ul>
                  </div>
                  
                  <div class="card" style="width: 18rem;">
                    <h3 class="text-white card-header bg-danger">Name Goes here</h3>
                    <h4 class="text-white bg-danger card-header mb-2">intern role</h4>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID Number: </li>
                      <li class="list-group-item">Email Address: </li>
                      <li class="list-group-item">School: </li>
                    </ul>
                  </div> -->
            </main>
        </body>
        </html>`;

        fs.writeFile(filename, html, (err) =>
        err ? console.error(err) : console.log('Success!')
        );
    })