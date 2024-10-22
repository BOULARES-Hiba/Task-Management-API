import express from 'express';
import taskRouter from './routers/tasksRouter.js';

const app = express();

app.use('/api/v1/tasks',taskRouter)

const Port = 3000;
app.listen(Port, () => {
   console.log(`server is running on port ${Port}`)
})