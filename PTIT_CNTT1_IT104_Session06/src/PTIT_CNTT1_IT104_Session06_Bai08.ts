class Book {
  id: string
  title: string
  author: string
  stock: number
  status: string
  constructor(id: string, title: string, author: string, stock: number, status: string) {
    this.id = id
    this.title = title
    this.author = author
    this.stock = stock
    this.status = status
  }
}

class Member {
  id: string
  name: string
  contact: string
  books: Book[] = []
  status: string 
  constructor(id: string, name: string, contact: string, status: string) {
    this.id = id
    this.name = name
    this.contact = contact
    this.status = status
  }
}

class LendedBook {
  memberID: string
  bookID: string
  dueDate: Date
  constructor(memberID: string, bookID: string, dueDate: Date) {
    this.memberID = memberID
    this.bookID = bookID
    this.dueDate = dueDate
  }
}

class Library {
  books: Book[] = []
  members: Member[] = []
  addBook(book: Book): void {
    this.books.push(book)
    console.log(`Đã thêm sách: ${book.title}`)
  }
  showBooks(): void {
    if (this.books.length === 0) {
      console.log("Thư viện chưa có sách nào.")
      return
    }
    console.log("Danh sách sách trong thư viện:")
    this.books.forEach(book => {
      console.log(`ID: ${book.id}
            Tên sách: ${book.title}
            Tác giả: ${book.author}
            Số lượng: ${book.stock}
            Trạng thái: ${book.status}
            ------------------------`)
    })
  }
}
const library = new Library()
library.addBook(new Book("1", "Harry Potter", "J.K. Rowling", 6, "available"))
library.addBook(new Book("2", "Chí Phèo", "Nam Cao", 9, "borrowed"))
library.addBook(new Book("3", "Làm đĩ", "Vũ Trọng Phụng", 3, "borrowed"))
library.showBooks()

