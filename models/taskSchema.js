import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
   name: {
      type: String, 
      trim: true, 
      required: [true, 'Must provide a name'],
      maxlength: [20, 'Name must be less than 20 characters']
   },
   completed: {
      type: Boolean,
      default: false 
   }
});

const Task = mongoose.model('task', taskSchema);

export default Task;