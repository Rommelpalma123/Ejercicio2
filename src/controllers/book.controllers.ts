import { BookService } from "../services/book.service"
import { Request, Response } from "express"

export const createBook = async (req: Request, res: Response) => {
  try {
    const data = await BookService.createBook(req.body);
    return res.json(data);
  } catch (erorr) {
    throw new Error("Something went wrong whem creating the book");
  }
}

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const data = await BookService.getAllBooks();
    return res.json(data);
  } catch (error) {
    throw new Error("Something went wrong getting all books");
  }
}

export const getAllBooksByDateAt = async (req: Request, res: Response) => {
  try {
    const data = await BookService.getAllBooksByDateAt();
    return res.json(data);
  } catch (error) {
    throw new Error("Something went wrong getting all books by date");
  }
}

export const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await BookService.updateBook(id, req.body);
    return res.json(data);
  } catch (error) {
    throw new Error("Something went wrong updating the book");
  }
}