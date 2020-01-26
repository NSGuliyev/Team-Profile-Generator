const inquirer = require("inquirer");
const fs = require("fs");


function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name ?"
        },
        {
            type: "input",
            name: "email:",
            message: "What is your email ?"
        },
        {
            type: "list",
            name: "role",
            message: "Whay is Your Position At the Company?",
            choices: ["Maneger", "Engineer", "Intern"]
        }
    ])
        .then(function (data) {
            switch (data.role) {
                case "Manager":
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "id",
                            message: "Enter Employee ID:"
                        },
                        {
                            type: "input",
                            name: "office",
                            message: "Enter office number: "
                        }
                    ]).then((answers) => { console.log(answers); })
            }

        });

}




promptUser()