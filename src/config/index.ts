import { config } from 'dotenv'

config({ path: ".env.development" })

export const port = process.env.PORT;
