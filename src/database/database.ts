import { DataSource } from 'typeorm'
import { Book } from '../entities/book'

const AppDaraSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '5432',
  port: 5432,
  database: 'books',
  entities: [ Book ],
  //logging: true,  
  synchronize: true
})

export const conexionDatabase = async () => {
    try{
      await AppDaraSource.initialize();
      console.log("conectado a la base de datos")
    } catch (error) {
      console.log("error al conectar a la base de datos", error)
    }
}