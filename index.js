const fs = require('fs');
const inquirer = require('inquirer');

//Create an array of questions for manager 
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter manager's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter manager's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter employee ID",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter your employee's ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Provide your email address",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please provide an email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'phone',
            message: "Provide an office number",
            validate: phoneInput => {
                if (phoneInput) {
                    return true;
                } else {
                    console.log("Please provide an office number");
                    return false;
                }
            }
        }
    ])
}

promptManager();


const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmEngineer',
            message: 'Would you like to add an engineer to your team?',
            default: true
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter engineer's name",
            validate: engineerInput => {
                if (engineerInput) {
                    return true;
                } else {
                    console.log("Please enter engineer's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Provide engineer's employee ID",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please provide engineer's employee ID");
                    return false;
                }
            }   
        },
        {
            type: 'input',
            name: 'email',
            message: "Provide engineer's email address",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please provide engineer's email");
                    return false;
                }
            }   
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "Provide engineer's GitHub username",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please provide engineer's GitHub username");
                    return false;
                }
            }
        }  
    ])         
}

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmIntern',
            message: 'Would you like to add an intern to your team?',
            default: true
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter intern's name",
            validate: internInput => {
                if (internInput) {
                    return true;
                } else {
                    console.log("Please enter intern's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Provide intern's employee ID",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please provide intern's employee ID");
                    return false;
                }
            }   
        },
        {
            type: 'input',
            name: 'email',
            message: "Provide intern's email address",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please provide intern's email");
                    return false;
                }
            }   
        },
        {
            type: 'input',
            name: 'school',
            message: "Provide intern's school",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please provide intern's school");
                    return false;
                }
            }   
        }
    ])
}
 


    //engineer option:  name, id, email, github username; take back to the menu
    //intern option: name, id, email, school; take back to the menu



//finish building team, exit applicaiton and HTML is generated


//when email is clicked in the HTML, then my default email program opens and populates the TO field of the emal with the address


//click on Github username, profile opens in new tab