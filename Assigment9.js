//Task 1
class Todo {
    constructor(id, title) {
        this.title = title;
        this.id = id;
        this.isDone = false;
        this.createdAt = new Date();
    }
}

class TodoList {

    constructor() {
        this.toDos = [];
    }

    addTodo(title) {
        const uniqueId = Date.now() + Math.random().toString(36).substring(2, 5);
        const newTodo = new Todo(uniqueId, title);
        this.toDos.push(newTodo);
        return newTodo;
    }

    removeTodo(id) {
        this.toDos = this.toDos.filter((toDo) => toDo.id != id);
    }

    checkActiveTodo(id) {
        const todo = this.toDos.find(todo => todo.id === id);

        if (todo) {
            todo.isDone = true;

        } else {
            console.log("Task with the ID " + " " + id + " doesn't exist.");
        }
    }

    getAllTodos(options = {}) {
        if (options.active === true) {
            return this.toDos.filter(todo => todo.isDone != true);
        }
        if (options.active === false) {
            return this.toDos.filter(todo => todo.isDone === true);
        }

        return this.toDos;
    }
}


//Task 2
class Item {
    constructor(title, id, price, quantity = 1) {
        this.title = title;
        this.id = id;
        this.price = price;
        this.quantity = quantity;
    }
}

class shoppingCart {
    constructor() {
        this.items = [];
    }

    addToCart(title, id, price, quantity) {
        const item = this.items.find(item => item.title === title);
        if (item) {
            item.quantity += quantity;
        } else {
            const newItem = new Item(title, id, price, quantity);
            this.items.push(newItem);
        }
    }

    removeFromCart(id){
        this.items = this.items.filter(item => item.id !== id)
    }

    calculateTotalPrice(){
        return this.items.reduce((total, item)=>{
            return total+=item.price * item.quantity;
        },0)
    }

    updateItem(id, newQuantity){
    const item = this.items.find((item)=>item.id === id);
    if(item && newQuantity > 0){
        item.quantity = newQuantity;
    }else if(item && newQuantity===0){
        this.removeFromCart(id);
    }else{
        console.log("Invalid id or new quantity.");
    }
    }
}


//Task 3
class Book{
    constructor(title, releaseDate, author){
        this.title = title;
        this.releaseDate = releaseDate;
        this.author = author;
    }
}

class Library{

    constructor(){
        this.books = [];
    }

    addBook(title, releaseDate, author){
        const newBook = new Book(title, releaseDate, author);
        this.books.push(newBook);
    }

    removeBook(title){
        this.books  = this.books.filter((book)=>book.title !== title);
    }

    listBooks(sortByYear = false, authorName = ""){
    let result = this.books.slice();

    if(authorName!==""){
       result =  result.filter((book)=>book.author === authorName);
    }

    if(sortByYear){
        result.sort((a, b)=>a.releaseDate-b.releaseDate);
    }
    return result;
    }

}


//Task 4
class Contact{
    constructor(name, mail, number){
        this.name = name;
        this.mail = mail;
        this.number = number;
    }
}

class  ContactManager{
    constructor(){
        this.listOfContacts = [];
    }

    addNewContact(name, mail, number){
       const exists = this.listOfContacts.find((contact)=>contact.number === number || contact.mail === mail);

       if(!exists){
        const newContact = new Contact(name, mail, number);
        this.listOfContacts.push(newContact);
       }else{
        console.log("Contact with given mail or number already exists.");
       }
    }

    viewAllContacts(){
        return this.listOfContacts;
    }

    UpdatePhone(mail, newNumber){
    const contact = this.listOfContacts.find((contact)=>contact.mail===mail);
    if(contact){
    contact.number = newNumber;
    }else{
    console.log("Contact doesn't exist");
    }
    }

    deleteContact(number){
        this.listOfContacts = this.listOfContacts.filter((contact)=>contact.number!==number);
    }
}

const myManager = new ContactManager();

console.log("--- Testing: addNewContact() ---");
myManager.addNewContact("Alice", "alice@test.com", "123");
myManager.addNewContact("Bob", "bob@test.com", "456");

// Test Duplicate Prevention
myManager.addNewContact("Charlie", "alice@test.com", "789"); // Should fail (duplicate mail)
myManager.addNewContact("David", "david@test.com", "123");   // Should fail (duplicate number)

console.log("Current list length (Expected: 2):", myManager.viewAllContacts().length);


console.log("\n--- Testing: UpdatePhone() ---");
myManager.UpdatePhone("alice@test.com", "999");
const alice = myManager.viewAllContacts().find(c => c.mail === "alice@test.com");
console.log("Updated number for Alice (Expected: 999):", alice.number);


console.log("\n--- Testing: deleteContact() ---");
myManager.deleteContact("456"); // Delete Bob
console.log("List length after delete (Expected: 1):", myManager.viewAllContacts().length);


console.log("\n🎉 ALL CONTACT MANAGER TESTS PASSED!");