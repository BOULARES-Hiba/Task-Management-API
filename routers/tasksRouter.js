import express from 'express';
import { get_tasks, set_tasks ,get_task, change_task, delete_task } from '../controllers/tasksControllers.js';


const  taskRouter = express.Router();


taskRouter.route('/').get(get_tasks).post(set_tasks); 
taskRouter.route('/:id').get(get_task).patch(change_task).delete(delete_task); 

export default taskRouter;