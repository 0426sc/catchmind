import express from "express";
import { join } from "path";
import socketIO from "socket.io";
import logger from "morgan"

const app = express();
const PORT = 4001;

// app.listen(PORT, () => {
//     console.log('부히히 : http://localhost:${PORT}')
// })

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.get("/", (req, res) => res.render("home"));
app.use(express.static(join(__dirname, "static")));

const handleListener = () => {
    console.log(`부히히 : http://localhost:${PORT}`);
}

const server = app.listen(PORT, handleListener);
const io = socketIO(server);

io.on("connection", (socket) => {
    setTimeout(() => {
        socket.emit("Ground pound");
    }, 5000); 
 })

// let arr = [];

// io.on("connection", (socket) => {
//     arr.push(socket.id);
// });

// setInterval(() => {
//     console.log(arr);
// }, 2000);
// app.listen(PORT, handleListener);