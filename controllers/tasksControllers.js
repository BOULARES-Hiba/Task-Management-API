import Task from "../models/taskSchema.js"
import asyncWrapper  from "../middelwares/asyncWrapper.js";
import {createCustomError } from "../errors/custom-error.js";
export const get_tasks = asyncWrapper(async (req, res) => {
   const tasks = await Task.find();
   res.status(200).json(tasks);
})

export const set_tasks = asyncWrapper(async (req, res) => {
   const newTask = await Task.create(req.body);
   res.status(201).json(newTask);
});

export const get_task = asyncWrapper(async (req, res) => {
   const task = await Task.findById(req.params.id);
   if (!task) {
      return next(createCustomError( "Task not found",404));
   }
   res.status(200).json(task);
});

export const change_task = asyncWrapper(async (req, res) => {
   const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true ,  
      runValidators: true
   });
   if (!updatedTask) {

      return next(createCustomError("Task not found",404));
   }
   res.status(200).json(updatedTask); 
});

export const delete_task = asyncWrapper(async (req, res) => {
   const deletedTask = await Task.findByIdAndDelete(req.params.id);
   if (!deletedTask) {
      return next(createCustomError("Task not found",404));
   }
   res.status(204).send("Task deleted !"); 
});