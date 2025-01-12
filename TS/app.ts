import { LibrarianRoles, StudentRoles, TeacherRoles, users } from "./static"
import { rl } from "./readline"
import { RolesDisplayer, StudentController } from "./Services"

console.log(`Welcome to library management system.`)
console.log(`Here's available Roles:`)
console.log(`1. ${users.learner}`)
console.log(`2. ${users.facilitator}`)
console.log(`3. ${users.manager}`)

const rolesArray = Object.values(users) as Array<keyof typeof users>
// console.log(rolesArray)

rl.question('Please select your role (1, 2, 3): ', (roleNumber: string) => {
  // console.log(typeof(roleNumber))   -> string
  let userNumber = parseInt(roleNumber) - 1;

  switch (roleNumber) {
    case '1':
      StudentController(rl)
      break;
    case '2':
      console.log(`Your role is now ${rolesArray[userNumber]}`)
      RolesDisplayer(users.facilitator, TeacherRoles)
      break;
      case '3':
        console.log(`Your role is now ${rolesArray[userNumber]}`)
        RolesDisplayer(users.manager, LibrarianRoles)
      break;
    default:
      console.log('Invalid role selected.');
      rl.close();
      return;
  }

  rl.close();
});