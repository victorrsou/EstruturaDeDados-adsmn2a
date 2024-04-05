function Book (title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

var book = new Book('Estrutura de Dados', 406, '978-85-7522-533-0');

console.log(book.title);
book.title = 'Estrutura de Dados e algoritmos com JavaScript'
console.log(book.title);
console.log('Este livro possui: ' + book.pages + ' paginas.');