import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    taskName: { type: String, required: true },
    date: { type: Date, required: true },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
