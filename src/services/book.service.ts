import { Book } from "../entities/book"
import { CreateBook } from "../interfaces/book.interface"

export const BookService = {
  createBook: async (entityBook: CreateBook) => {
    return await Book.save({
      nombre: entityBook.nombre,
      autor: entityBook.autor,
      editorial: entityBook.editorial
    })
  }
}
