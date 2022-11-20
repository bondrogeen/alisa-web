import http from 'http';
import { Server } from 'socket.io';
import alisa from './alisa';

export default app => {
  const server = http.createServer(app);
  const io = new Server(server);


  io.on('connection', socket => {
    console.log('a user connected');

    alisa.conection();
    alisa.on('data', data => {
      socket.emit('data', data);
    });

    socket.on('send', (id, message) => alisa.onSend(id, message));

    socket.on('token', ({ token }) => {
      console.log('token');
    });
    socket.on('disconnect', () => {
      console.log('user disconnected');
      //   alisa.disconection();
    });
  });
  return server;
};
