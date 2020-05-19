import jwt from 'jsonwebtoken';
import encoder from '../utility/passwordEnc';
// import database method for saving user

const signinController = (req, res) => {
  if (!email && !password) {
    res.status(400).json({
      status: 'error',
      error: 'Email and password field cannot be empty'
    });
    return;
  }
  const passwordMatch = encoder.decode(password, 'dbPassword');

  // inside the database operation, store the jwt
  const token = jwt.sign({
    sub: 'the user id from the dB'
  }, process.env.TOKENKEY, { expiresIn: 1440 });
  // the body to send to front end
  const responseBody = {
    status: 'Success',
    data: {
      message: 'Your account has been successfully created',
      token,
      userId: 'userID from the DB'
    }
  };

};

export default signinController;
