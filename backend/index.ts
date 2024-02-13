import { Socket, Server } from "socket.io";
import http from "http";
import express from 'express'

const app = express();
const server = http.createServer(app)

const io = new Server(app)

io.on('connection', (socket:Socket) => {
    console.log('a user connected')
})

server.listen(3000, () => {
    console.log('Server listening on PORT 3000')
})