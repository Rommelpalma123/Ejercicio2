import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import 'reflect-metadata'
import { PORT } from './config/index'
import { conexionDatabase } from './database/database'

export class Server {
  private app
  constructor() {
    this.app = express();
    //this.routes();
    this.listen();
    this.middlewares();
    conexionDatabase();
    this.config();
  }

  private config() {
    this.app.set("port", PORT)
  }

  private middlewares() {
    this.app.use(cors())
    this.app.use(morgan("dev"))
    this.app.use(express.json({ limit: "30mb" }))
  }

  /*private routes() {
    this.app.use("/api/book")
  }*/

  public listen(){
    this.app.listen(this.app.get("port"), () => {
      console.log(`servidor corriendo en el puerto http://localhost:${PORT}`)
    })
  }
}
