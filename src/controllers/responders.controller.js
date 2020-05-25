import jwt from 'jsonwebtoken';
import encoder from '../utility/passwordEnc';
import RespondersModel from '../models/responders.model';

const respondersController = (req, res) => {
  if (!req.body.email && !req.body.password) {
    res.status(400).json({
      status: 'error',
      error: 'Email and password field cannot be empty'
    });
    return;
  }
  const hashedPassword = encoder.hash(req.body.password, 9);
  req.body.password = hashedPassword;
  const creationDate = new Date().toLocaleDateString;
  req.body.creationDate = creationDate;
  RespondersModel.createResponder(req.body).then((err, result) => {
    if (err) {
      res.status(401).json(err.message);
    }
    const { _id: userId } = result;
    // create a token to send back to the user
    const token = jwt.sign({
      sub: userId
    }, process.env.TOKENKEY, { expiresIn: 1440 });
    // response body to send to frontend
    const responseBody = {
      status: 'Success',
      data: {
        message: 'Your account has been successfully created',
        token,
        userId
      }
    };
    res.status(201).json(responseBody);
  });
};

export default respondersController;
