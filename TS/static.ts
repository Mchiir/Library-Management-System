import Book from "./Book";

export let users = {learner: 'Student', facilitator:'Teacher', manager:'Librarian'}

export let StudentRoles: String[] = 
['Borrow books', 'Reading books']
export let TeacherRoles: String[] = 
['Borrow books', 'Guiding students in library', 'Recommending books for students']
export let LibrarianRoles: String[] = 
['Managing/Organising the library', 'Lending books', 'Adding books', 'Removing books', 'Recording borrowers']

export let Books: Book[] = [];
Books.push(new Book(1, "The great controversy", "Ellen G.white", "BSN", true))