const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const Alisa = require("alisa-npm");
const { token } = require("./token");

const alisa = new Alisa({ token })

app.use(express.static('../www'));

app.get('/ws', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get("*", function (req, res) {
  res.redirect('/'); // this doesn't work
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('message', message => {
    console.log(message)
  })
});

server.listen(3001, () => {
  console.log('listening on *:3000');
});

alisa.on("message", (message) => {
  io.emit('message', message);
});
alisa.on("open", (message) => {
  console.log(message);
});

alisa.start()
