import { Books, StudentRoles, users } from "./static"; // Ensure this is properly exported

export function RolesDisplayer(user: string, userRoles: String[]) {
    console.log(`List of roles for ${user}: `);
    let count = 1;
    userRoles.forEach(role => {
        console.log(`${count++}. ${role}`);
    });
}

export function StudentController(rl: any) {
    console.log('\n');
    console.log(`Your role is now ${users.learner}`);
    console.log('Select the number option for accessing roles!\n');
    RolesDisplayer(users.learner, StudentRoles);

    console.log('\n')
    rl.question(': ', (option: string) => {
        switch (option) {
            case '1':
                console.log('Book lent!');
                break;
            case '2':
                console.log('Take a book and read');
                Books.forEach(book => {
                    console.log(book.display()); // Assuming each book in Books has a display() method
                });
                break;
            default:
                console.log('No valid choice selected!');
                return;
        }

    });
};