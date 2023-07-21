import { Router } from 'express';
import { createBook, getAllBooks } from '../controllers/book.controllers'

export const routerBook = Router();

routerBook.post("/createBooks", createBook)

routerBook.get("/allBooks", getAllBooks)