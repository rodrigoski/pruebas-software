/* Nuestro objeto d epruebas */
const BooksService = require('./books.service.js');

const MongoLibStub = {
  getAll:()=>[...fakeBooks],
  create:()=>newBook
}

const fakeBooks = [
  {
    _id:1,
    name:"Harry Potter"
  }
]

const newBook = {
        _id: 2,
        title: 'Demian',
        author: 'Herman Hesse',
        year: 1956,
};


jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for BooksService', () => {
  /* Crear variable instancia del servicio */
  let service;
  /* para cada prueba crear una nueva instancia */
  beforeEach(()=>{
    /* crear instancia del servicio */
    service = new BooksService();
  });

    /* pruebas para le método getbooks */
  describe('Test for getBooks()', () => {
    test('debería devolver una lista de libros', async ()=> {
      const books = await service.getBooks({});
      console.log(books);
      expect(books.length).toEqual(1);
    })

  })

  describe('Test for createBooks()', () => {
    test('debería crear una lista de libros', async ()=> {
      const book = await service.createBook({});
      console.log(book);
      expect(book.title).toEqual("Demian");
    })

  })
})
