import express, { Express, Request, Response } from "express";
import http from "http";
import { Server } from "socket.io"

const app: Express = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req: Request, res: Response) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
