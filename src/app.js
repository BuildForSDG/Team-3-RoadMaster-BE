import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import indexRouter from './routes';

config();
cloudinary.config({
  cloud_name: process.env.CCN,
  api_secret: process.env.CAS,
  api_key: process.env.CAK
});
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', indexRouter);

// Create 404 Errors
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Handle all Errors
app.use((err, req, res) => {
  res.status(err.status).send({
    'Server Error': err.message
  });
});

export default app;
