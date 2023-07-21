import { BookService } from "../services/book.service"
import { Request, Response } from "express"

export const createBook = async (req: Request, res: Response) => {
  try {
    const data = await BookService.createBook(req.body)
    return res.json(data)
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong whem creating the book",
      error
    })
  }
}

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const data = await BookService.getAllBooks()
    return res.json(data)
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong getting all books",
      error
    })
  }
}

export const getAllBooksByDateAt = async (req: Request, res: Response) => {
  try {
    const data = await BookService.getAllBooksByDateAt()
    return res.json(data)
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong getting all books by date",
      error
    })
  }
}

export const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = await BookService.updateBook(id, req.body)
    return res.json(data)
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong updating the book",
      error
    })
  }
}

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = await BookService.deleteBook(id)
    return res.json(data)
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong deleting the book",
      error
    })
  }
}
