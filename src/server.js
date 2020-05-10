import http from 'http';
import socketIO from 'socket.io';
import app from './app';

const PORT = process.env.PORT || 3001;

const server = http.createServer(app);

const io = socketIO(server);

io.on('connection', (socket) => {
  socket.username = 'Team 3';
  // console.log(`${socket.username} just connected`);

  socket.on('sos', (data) => {
    io.sockets.emit('reply', { message: 'help is on the way' });
    io.sockets.emit('response', { data });
  });
});

server.listen(PORT);

export default server;
