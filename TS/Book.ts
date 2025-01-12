export default class Book {
    private id: number;
    private title: string;
    private author: string;
    private publisher: string;
    private isAvailable: boolean;
  
    constructor(id: number, title: string, author: string, publisher: string, isAvailable: boolean) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.isAvailable = isAvailable;
    }

    // Optionally, you can add a method to display the book info
    display(): string {
        return `Book id=${this.id}, title='${this.title}', author='${this.author}', publisher='${this.publisher}', Available=${this.isAvailable ? 'Available' : 'Not available'}`;
    }

    // Getters
    getId(): number {
    return this.id;
    }

    getTitle(): string {
    return this.title;
    }

    getAuthor(): string {
    return this.author;
    }

    getPublisher(): string {
    return this.publisher;
    }

    isBookAvailable(): boolean {
    return this.isAvailable;
    }

    // Setters
    setId(id: number): void {
    this.id = id;
    }

    setTitle(title: string): void {
    this.title = title;
    }

    setAuthor(author: string): void {
    this.author = author;
    }

    setPublisher(publisher: string): void {
    this.publisher = publisher;
    }

    setAvailability(isAvailable: boolean): void {
    this.isAvailable = isAvailable;
    }
}