const express = require('express');
import { readFile } from 'fs';
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
// const Alisa = require("alisa-npm");
const Alisa = require("../../alisa/index");
const token = null;
let isOk = false;
// const { token } = require("./token");
// const token = 

const alisa = new Alisa({ token })

app.use(express.static('../www'));

app.get('/ws', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get("*", function (req, res) {
  res.cookie('connecting', isOk)
  res.redirect('/'); // this doesn't work
});

io.on('connection', (socket) => {
  console.log('a user connected');
  const state = alisa.getState()
  socket.emit('config', state);
  socket.on('send', message => {
    alisa.send(message);
    console.log(message)
  })
  socket.on('token', ({ token }) => {
    alisa.setToken(token)
    alisa.start().then((res) => {
      isOk = true
      socket.emit('token', res);
    }).catch((e) => {
      socket.emit('token', { error: e });
    })
    console.log(token)
  })
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});

alisa.on("message", (message) => {
  io.emit('message', message);
});

alisa.on("state", (message) => {
  if (!isOk) {
    isOk = true
  }
  io.emit('config', alisa.getState());
  console.log('state', message);
});

alisa.start()
