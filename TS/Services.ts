export function RolesDisplayer(user: String, userRoles: String[]){
    console.log(`List of roles for role ${user}: `)
    let count = 1;
    userRoles.forEach(role => {
        console.log(`${count++}. ${role}`)
    })
}

export function StudentController(){
    console.log('\n')
    console.log('Choose the option number: ')
};