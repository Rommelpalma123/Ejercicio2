import { Book } from "../entities/book"
import { BookService } from "../services/book.service"
import { Request, Response } from "express"

export const createBook = async (req: Request, res: Response) => {
  try {
    const data = await BookService.createBook(req.body)
    return res.json(data)
  } catch (erorr) {
    throw new Error("Something went wrong whem creating the book")
  }
}

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const data = await BookService.getAllBooks();
    return res.json(data);
  } catch (error) {
    throw new Error("Something went wrong getting all books")
  }
}