import * as dotenv from 'dotenv'
import { createServer } from './createServer'
// import { db } from './db'
dotenv.config()

const server = createServer()

// TODO: Use express middleware to handle cookies (JWT)
// TODO: Use express middleware to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  ({ port }) => {
    console.log(`Listening on port http://localhost:${port}`)
  }
)
