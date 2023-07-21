import { Router } from 'express';
import { createBook } from '../controllers/book.controllers'

export const routerBook = Router();

routerBook.post("/createBooks", createBook)

routerBook.get("/allBooks", (req, res) => {
  res.send("homa")
})