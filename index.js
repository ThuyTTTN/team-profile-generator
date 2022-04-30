const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require ('./lib/Intern');
const generateTeam = require('./src/page-template');
const fs = require('fs');
const inquirer = require('inquirer');
const employees = [];

init();

function init() {
    inquirer.prompt([
        //manager questions
        {
            type: 'input',
            name: 'name',
            message: 'What is the manager\'s name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                    } else {
                        console.log('Please enter manager\'s name!');
                        return false;
                    }
                }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the manager\'s id?',
            validate: idInput => {
                if (idInput) {
                    return true;
                    } else {
                        console.log('Please enter manager\'s id!');
                        return false;
                    }
                }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the manager\'s e-mail?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                    } else {
                        console.log('Please enter manager\'s e-mail!');
                        return false;
                    }
                }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager\'s office number?',
            validate: numberInput => {
                if (numberInput) {
                    return true;
                    } else {
                        console.log('Please enter office number!');
                        return false;
                    }
                }
        }
    ])

    .then(function (managerAnswers) {
        const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
        employees.push(manager);

        //inquirer prompt #2
        teamQuestions();

        function teamQuestions() {
            inquirer.prompt([
                //select team members
                {
                    type: 'list',
                    name: 'employee',
                    message: 'Which team member position would you like to fill?',
                    choices: ['Engineer', 'Intern', 'None']
                }
            ])
            .then(function(teamAnswers) {
                if(teamAnswers.employee === 'Engineer') {

                    //inquirer prompt #3
                    engineerQuestions();

                    function engineerQuestions() {
                        inquirer.prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'What is the engineer\'s name?',
                                validate: nameInput => {
                                    if (nameInput) {
                                        return true;
                                        } else {
                                            console.log('Please enter engineer\'s name!');
                                            return false;
                                        }
                                }
                            },
                            {
                                type: 'input',
                                name: 'id',
                                message: 'What is the engineer\'s id?',
                                validate: idInput => {
                                    if (idInput) {
                                        return true;
                                        } else {
                                            console.log('Please enter engineer\'s id!');
                                            return false;
                                        }
                                    }
                            },
                            {
                                type: 'input',
                                name: 'email',
                                message: 'What is the engineer\'s e-mail?',
                                validate: emailInput => {
                                    if (emailInput) {
                                        return true;
                                        } else {
                                            console.log('Please enter engineer\'s e-mail!');
                                            return false;
                                        }
                                    }
                            },
                            {
                                type: 'input',
                                name: 'github',
                                message: 'What is the engineer\'s GitHub username?',
                                validate: githubInput => {
                                    if (githubInput) {
                                        return true;
                                        } else {
                                            console.log('Please enter GitHub username!');
                                            return false;
                                        }
                                    }
                            }
                        ])

                        .then(function (engineerAnswers) {
                            const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
                            employees.push(engineer);
                            teamQuestions();
                        })
                    }
                } else if (teamAnswers.employee === 'Intern') {

                    //inquire prompt 4
                    internQuestions();

                    function internQuestions() {
                        inquirer.prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'What is the intern\'s name?',
                                validate: nameInput => {
                                    if (nameInput) {
                                        return true;
                                        } else {
                                            console.log('Please enter intern\'s name!');
                                            return false;
                                        }
                                    }
                            },
                            {
                                type: 'input',
                                name: 'id',
                                message: 'What is the intern\'s id?',
                                validate: idInput => {
                                    if (idInput) {
                                        return true;
                                        } else {
                                            console.log('Please enter intern\'s id!');
                                            return false;
                                        }
                                    }
                            },    
                            {
                                type: 'input',
                                name: 'email',
                                message: 'What is the intern\'s e-mail?',
                                validate: emailInput => {
                                    if (emailInput) {
                                        return true;
                                        } else {
                                            console.log('Please enter intern\'s e-mail!');
                                            return false;
                                        }
                                    }
                            },
                            {
                                type: 'input',
                                name: 'school',
                                message: 'Enter Intern\'s school name.',
                                validate: schoolInput => {
                                    if (schoolInput) {
                                        return true;
                                        } else {
                                            console.log('Please enter school name!');
                                            return false;
                                        }
                                    }
                            }
                        ])

                        .then(function(internAnswers) {
                            const intern = new Intern (internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
                            employees.push(intern);
                            teamQuestions();
                        })
                    }
                } else {
                    //exit
                    createHTML();
                }
            })
        }
    })

}

function createHTML() {
    fs.writeFile('./dist/index.html', generateTeam(employees), (error) => {
        if (error) {
            console.log(error);
            return;
        } else {
            console.log('Success! The HTML file for your team has been created!');
        }
    });
    fs.copyFile('./dist/style.css', './dist/team.html', (error) => {
        if (error) {
            console.log(error);
            return;
        } else {
            console.log('The CSS file for your HTML has been successfully created!');
        }
    });
}


