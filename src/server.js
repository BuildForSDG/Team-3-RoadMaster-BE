import http from 'http';
import socketIO from 'socket.io';
import app from './app';
import userModel from './models/users.model';
import responderModel from './models/responders.model';
import findClosestStation from './utility/findClosestStation';

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

// Instantiation of the socket IO on the server
const io = socketIO(server);

// Function to run when a client connects to the server whereever it is hosted
io.on('connection', (socket) => {
// set the socket name to the name of the responder who logged in
  socket.on('responderSignin', (data) => {
    socket.username = data.nameOfUnit;
    io.sockets.emit('responderNameChange', { name: socket.username });
  });
  // set the socket name to the name of the user who logged in
  socket.on('userSignin', (data) => {
    socket.username = data.name;
    io.sockets.emit('usernameChange', { username: socket.username });
  });

  // SOS sent from victim
  socket.on('sos', (data) => {
    // data = {userID: 'id', accidentLocation: {lat: '', lon: ''}}
    userModel.findById(data.userID).then((user) => {
      // find the nearest fire station
      responderModel.getAll().then((responders) => {
        // data.accidentLocation should be in format = { lat: 6.3445645, lon: 3.4533255 }
        const closestStation = findClosestStation(data.accidentLocation, responders);
        // send the response team the medical records of the victim
        // the event name should be the name of the station so that socket.IO can target
        // that station's javascript socket connection
        io.sockets.emit(`${closestStation}`, { user, accidentLocation: data.accidentLocation });
        const message = `The closest station to you is ${closestStation}
                      and it would take 10 minutes to get to your location, Help is on the way`;
        io.sockets.emit('reply', { message });
      });
    })
      .catch((e) => console.error(e));
  });

  // Eyewitness report from observers
  socket.on('report', (data) => {
    io.sockets.emit('replied', { message: 'thanks for your report, it will be treated immediately' });
    // send the response team the details of the location
    io.sockets.emit('responded', { data });
  });
});

server.listen(PORT);
