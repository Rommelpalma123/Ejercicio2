import { Book } from "../entities/book"
import { BookService } from "../services/book.service"
import { Request, Response } from "express"

export const createBook = async (req: Request, res: Response) => {
  try {
    const data = await BookService.createBook(req.body)
    return res.json(data)
  } catch (erorr) {
    throw new Error("Sometime went wrong whem creating the book")
  }
}
