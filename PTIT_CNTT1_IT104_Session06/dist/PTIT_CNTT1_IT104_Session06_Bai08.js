"use strict";
class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    constructor(id, name, contact, status) {
        this.books = [];
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
    }
}
class LendedBook {
    constructor(memberID, bookID, dueDate) {
        this.memberID = memberID;
        this.bookID = bookID;
        this.dueDate = dueDate;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Đã thêm sách: ${book.title}`);
    }
    showBooks() {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách nào.");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(book => {
            console.log(`ID: ${book.id}
            Tên sách: ${book.title}
            Tác giả: ${book.author}
            Số lượng: ${book.stock}
            Trạng thái: ${book.status}
            ------------------------`);
        });
    }
}
const library = new Library();
library.addBook(new Book("1", "Harry Potter", "J.K. Rowling", 6, "available"));
library.addBook(new Book("2", "Chí Phèo", "Nam Cao", 9, "borrowed"));
library.addBook(new Book("3", "Làm đĩ", "Vũ Trọng Phụng", 3, "borrowed"));
library.showBooks();
