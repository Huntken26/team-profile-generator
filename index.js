//Importing my required classes
// const Employee = require("./Employee");
// const Manager = require("./Manager");
// const Engineer = require("./Engineer");
// const Intern = require("./Intern");
// const html = require("js/generate.js");

const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = function (answers) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>HTML 5 Boilerplate</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
      <link rel="stylesheet" href="style.css">
    </head>
    <body>

    <div class="card">
<header class="card-header">
  <p class="card-header-title">
  Ryan
  </p>
  <button class="card-header-icon" aria-label="more options">
    <span class="icon">
      <i class="fas fa-angle-down" aria-hidden="true"></i>
    </span>
  </button>
</header>
<div class="card-content">
  <div class="content">
    
    
    <br>
  </div>
</div>
<footer class="card-footer">
  <a href="#" class="card-footer-item">ryan@gmail.com</a>
  <a href="#" class="card-footer-item">ryan id 1111</a>
</footer>
</div>

<div class="card">
<header class="card-header">
<p class="card-header-title">
  Component
</p>
<button class="card-header-icon" aria-label="more options">
  <span class="icon">
    <i class="fas fa-angle-down" aria-hidden="true"></i>
  </span>
</button>
</header>
<div class="card-content">
<div class="content">
  
  
  <br>
</div>
</div>
<footer class="card-footer">
<a href="#" class="card-footer-item">Save</a>
<a href="#" class="card-footer-item">Edit</a>
</footer>
</div>

<div class="card">
<header class="card-header">
<p class="card-header-title">
  Component
</p>
<button class="card-header-icon" aria-label="more options">
  <span class="icon">
    <i class="fas fa-angle-down" aria-hidden="true"></i>
  </span>
</button>
</header>
<div class="card-content">
<div class="content">
  
  
  <br>
</div>
</div>
<footer class="card-footer">
<a href="#" class="card-footer-item">Save</a>
<a href="#" class="card-footer-item">Edit</a>
</footer>
</div>
      <script src="index.js"></script>
    </body>
  </html>
  `
}


inquirer
  .prompt([
    {
      type: "input",
      message: "What's the name of this person?",
      name: "name",
    },
    {
      type: "input",
      message: "What is their id:",
      name: "id",
    },
    {
      type: "input",
      message: "What is their email?",
      name: "email",
    },
    
  ])
  .then((answers) => {
    const htmlpage = generateHTML(answers);

    fs.writeFile("index.html", htmlpage, (err) =>
      err ? console.log(err) : console.log("Successfully created html file!")
    );
  });



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
