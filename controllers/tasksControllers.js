import Task from "../models/taskSchema.js"


export const get_tasks = async (req, res) => {
try {
   const tasks = await Task.find();
   res.status(200).json(tasks);
} catch (error) {
   res.status(500).json({ message: "Error fetching tasks", error });
}
   
}

export const set_tasks = async (req, res) => {
   try {
      const newTask = Task.create(req.body);
      console.log(req.body)
      res.status(201).json(newTask);
   } catch (error) {
      res.status(400).json({ message: "Error creating task", error });
   }

}

export const get_task = async (req , res ) => {
   try {
      const task = await Task.findById(req.params.id); 
      if (!task) {
          return res.status(404).json({ message: "Task not found" });
      }
      res.status(200).json(task); 
  } catch (error) {
      res.status(500).json({ message: "Error fetching task", error });
  }
}

export const  change_task = async (req , res ) => {
   try {
      const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
      if (!updatedTask) {
          return res.status(404).json({ message: "Task not found" });
      }
      res.status(201).json(updatedTask); 
  } catch (error) {
      res.status(400).json({ message: "Error updating task", error });
  }

}

export const  delete_task = async  (req , res ) => {
   try {
      const deletedTask = await Task.findByIdAndDelete(req.params.id); 
      if (!deletedTask) {
          return res.status(404).json({ message: "Task not found" });
      }
      res.status(204).send(); 
  } catch (error) {
      res.status(500).json({ message: "Error deleting task", error });
  }
}