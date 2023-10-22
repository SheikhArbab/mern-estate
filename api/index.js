import express from 'express';
import { connectDb } from './config/config.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';  // Import the cors middleware
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

connectDb()
  .then(() => {
    console.log('Connected to the database');

    app.use('/user', userRouter);
    app.use('/auth', authRouter);

    app.use((err, req, res, next) => {
      const statusCode = err.statusCode || 500;
      const message = err.message || 'Internal Server Error';
      return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
      });
    });

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err.message);
  });
