import { Book } from "../entities/book"
import { CreateBook, UpdateBook } from "../interfaces/book.interface"

export const BookService = {
  createBook: async (entityBook: CreateBook) => {
    return await Book.save({
      nombre: entityBook.nombre,
      autor: entityBook.autor,
      editorial: entityBook.editorial
    })
  },

  getAllBooks: async (): Promise<Book[]> => {
    const books = await Book.find()
    return books
  },

  getAllBooksByDateAt: async (): Promise<Book[]> => {
    const books = await Book.find({
      order: {
        createdAt: "ASC"
      }
    })
    return books
  },

  updateBook: async (id: string, entityBook: UpdateBook) => {
    return await Book.update(id, entityBook)
  },

  deleteBook: async (id: string) => {
    return await Book.delete(id)
  }
}
