const { prompt } = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require ('./lib/Intern');
const generateTeam = require('./src/page-template');
const roles = { Manager: [], Engineer: [], Intern: [] };
const fs = require('fs');

init();

function init() {
    prompt([
        {
            type: 'confirm',
            name: 'isRole',
            message: 'Would you like to fill a position?',
            default: true
        }
    ])
        .then(({ isRole }) => {
            isRole
                ? fillRole()
                : createHTML()
        });
};

function fillRole() {
    prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Which position would you like to fill?',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
        .then(({ role }) => {

            prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the employee\'s name?',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter employee\'s name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the employee\'s id?',
                    validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log('Please enter employee\'s id!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the employee\'s e-mail?',
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log('Please enter employee\'s email!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is the manager\'s office number?',
                    when: role == 'Manager',
                    validate: numberInput => {
                        if (numberInput) {
                            return true;
                        } else {
                            console.log('Please enter office number!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is the engineer\'s github username?',
                    when: role == 'Engineer',
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log('Please enter gitHub username!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What is the intern\'s school name?',
                    when: role == 'Intern',
                    validate: schoolInput => {
                        if (schoolInput) {
                            return true;
                        } else {
                            console.log('Please enter a school!');
                            return false;
                        }
                    }
                }
            ])
            .then(ans => {
                role == 'Manager'
                    ? roles.Manager.push(new Manager(...Object.values(ans)))
                    : role == 'Engineer'
                        ? roles.Engineer.push(new Engineer(...Object.values(ans)))
                        : roles.Intern.push(new Intern(...Object.values(ans)));
            })
            .then(init)
    })
};


function createHTML() {
    fs.writeFile('./dist/index.html', generateTeam(), (error) => {
        if (error) {
            console.log(error);
            return;
        } else {
            console.log('Success! The HTML file for your team has been created!');
        }
    });
}