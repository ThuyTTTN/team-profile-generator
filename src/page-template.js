const generateTeam = team => {

    const generateManager = (manager) => {
        return `<div class="card">
                <div class="card-header">
                    <h2 class="card-title text-capitalize">${manager.getName()}</h2>
                    <h3 class="card-title"><span class="oi oi-person mr-2"></span></span> ${manager.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
                </div>`
    };


    const generateEngineer = (engineer) => {
        return `<div class="card">
                <div class="card-header">
                    <h2 class="card-title">${engineer.getName()}</h2>
                    <h3 class="card-title"><span class="oi oi-monitor mr-2"></span> ${engineer.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
                </div>`
    };
        
    const generateIntern = (intern) => {
            return `<div class="card">
                <div class="card-header">
                    <h2 class="card-title">${intern.getName()}</h2>
                    <h3 class="card-title"><span class="oi oi-pencil mr-2"></span></span> ${intern.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
                </div>`
    };

    const html = [];

        html.push(team
            .filter(employee => employee.getRole() === 'Manager')
            .map(manager => generateManager(manager))
        );
        html.push(team
            .filter(employee => employee.getRole() === 'Engineer')
            .map(engineer => generateEngineer(engineer))
        );
        html.push(team
            .filter(employee => employee.getRole() === 'Intern')
            .map(intern => generateIntern(intern))
            .join("")
        );

        return html.join("");

}

module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel=“stylesheet” href=“https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css” />
      <link rel="stylesheet" href="style.css">
      
    </head>
    
    <body>
      <div class="container my-5">
        <div class="row">
            <div class="col-12 jumbotron mb-3">
                <h1 class="txt-center">My Team</h1>
            </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center flex-wrap">
            ${generateTeam(team)}
            </div>
        </div>
      </div>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2022 by Thuy Nguyen</h3>
      </footer>
    </body>
    </html>
    `;
};



