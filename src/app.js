import express from 'express';
import cors from 'cors';
import indexRouter from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

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

module.exports = app;
