// const ws = new require("ws");

// const wsServer = new ws.Server({ port: 5000 });

// const socketList = [];

// wsServer.on("connection", (socket) => {
//     socketList.push(socket);
//     setTimeout(() => {
//         socket.send("Welcome to web-socket server")
//     }, 1000)

//     // console.log("New frontend connection");
//     socketList.forEach(item => {
//         if (item !== socket) {
//         item.send("New member connect")
//     }
//     })
// });

const { Server } = require("socket.io");
const { createServer } = require("http");

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("chat-message", (message) => {
    socket.broadcast.emit("chat-message", message);
  });
});

httpServer.listen(3001);
