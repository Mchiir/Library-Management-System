"use strict";
var Roles;
(function (Roles) {
    Roles["Student"] = "You're allowed to borrow or read student books";
    Roles["Teacher"] = "You're allowed to borrow or read Guidance/student books";
    Roles["Librarian"] = "You're allowed to add or remove any book";
})(Roles || (Roles = {}));
const rolesArray = Object.keys(Roles);
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log(`Welcome to library management system.`);
console.log(`Here's available Roles:`);
console.log(`1. ${rolesArray[0]}`);
console.log(`2. ${rolesArray[1]}`);
console.log(`3. ${rolesArray[2]}`);
readline.question('Please select your role (1, 2, 3): ', (roleNumber) => {
    let role;
    let rolesArrayIndex = 0;
    switch (roleNumber) {
        case '1':
            role = Roles.Student;
            break;
        case '2':
            role = Roles.Teacher;
            rolesArrayIndex = 1;
            break;
        case '3':
            role = Roles.Librarian;
            rolesArrayIndex = 2;
            break;
        default:
            console.log('Invalid role selected.');
            readline.close();
            return;
    }
    console.log(`Your role is now ${rolesArray[rolesArrayIndex]}`);
    console.log(role);
    readline.close();
});
