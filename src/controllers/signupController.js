import jwt from 'jsonwebtoken';
import encoder from '../utility/passwordEnc';
// import database method for saving user
import userModel from '../models/users.model';

const signupController = (req, res) => {
  if (!req.body.email && !req.body.password) {
    res.status(400).json({
      status: 'error',
      error: 'Email and password field cannot be empty'
    });
    return;
  }
  const hashedPassword = encoder.hash(req.body.password, 9);
  const creationDate = new Date().toLocaleDateString;
  req.body.password = hashedPassword;
  req.body.creationDate = creationDate;
  // inside the database operation, store the jwt
  userModel.createUser(req.body)
    .then((result) => {
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
    })
    .catch((err) => {
      res.status(401).json(err.message);
    });
};

export default signupController;
