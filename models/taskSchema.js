import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true 
   },
   completed: {
      type: Boolean,
      default: false 
   }
});

const task = mongoose.model('task', taskSchema);

export default task;