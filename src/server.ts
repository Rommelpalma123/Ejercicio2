import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import 'reflect-metadata'
import { port } from './config/index'
import { conexionDatabase } from './database/database'
import { routerBook } from "./routes/book.routes"
export class Server {
  private app
  constructor() {
    this.app = express();
    this.routes();
    this.listen();
    this.middlewares();
    conexionDatabase();
    this.config();
  }

  private config() {
    this.app.set("port", port)
  }

  private middlewares() {
    this.app.use(cors())
    this.app.use(morgan("dev"))
    this.app.use(express.json({ limit: "30mb" }))
  }

  private routes() {
    this.app.use(express.json());
    this.app.use("/api/book", routerBook);
  }

  public listen(){
    this.app.listen(this.app.get("port"), () => {
      console.log(`servidor corriendo en el puerto http://localhost:${port}`)
    })
  }
}
