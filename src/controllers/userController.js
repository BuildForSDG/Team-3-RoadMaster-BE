import userModel from '../models/users.model';

// sos controller would only insert the location and userID to the database
// the remaining work is done on socket.io
const sosController = (req, res) => {
  userModel.list()
    .then((users) => {
      res.status(201).send({ users });
    });
};

export default sosController;
