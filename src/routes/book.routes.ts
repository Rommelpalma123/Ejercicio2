import { Router } from 'express';
import {
  createBook,
  getAllBooks,
  getAllBooksByDateAt,
  updateBook,
  deleteBook
} from "../controllers/book.controllers"

export const routerBook = Router();

routerBook.post("/createBooks", createBook)

routerBook.get("/allBooks", getAllBooks)

routerBook.get("/allBooksByDateAt", getAllBooksByDateAt)

routerBook.put("/updateBook/:id", updateBook)

routerBook.delete("/deleteBook/:id", deleteBook)