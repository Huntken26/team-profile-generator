//Generate HTML function creates the cards for the manager, intern and engineer roles

const generateHTML = function (answers) {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>HTML 5 Boilerplate</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>

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
    <a href="#" class="card-footer-item">Delete</a>
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
  <a href="#" class="card-footer-item">Delete</a>
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
  <a href="#" class="card-footer-item">Delete</a>
</footer>
</div>
        <script src="index.js"></script>
      </body>
    </html>
    `
}