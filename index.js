import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; 
dotenv.config(); 
import  notFound  from './middelwares/not-found.js';
import taskRouter from './routers/tasksRouter.js';

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.use('/api/v1/tasks', taskRouter);


app.use(notFound);
mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database', err);
  });
