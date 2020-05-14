import http from 'http';
import socketIO from 'socket.io';
import app from './app';

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

// Instantiation of the socket IO on the server
const io = socketIO(server);

// Function to run when a client connects to the server whereever it is hosted
io.on('connection', (socket) => {
  socket.username = 'Team 3';
  // console.log(`${socket.username} just connected`);

  // SOS sent from victim
  socket.on('sos', (data) => {
    io.sockets.emit('reply', { message: 'help is on the way' });
    // send the response team the medical records of the victim
    io.sockets.emit('response', { data });
  });

  // Eyewitness report from observers
  socket.on('report', (data) => {
    io.sockets.emit('replied', { message: 'thanks for your report, it will be treated immediately' });
    // send the response team the details of the location
    io.sockets.emit('responded', { data });
  });
});

server.listen(PORT);


// Uncomment to log the server processes
// server.on('listening', () => {
//   console.log(`server running on localhost:${PORT}`);
// });

export default server;
