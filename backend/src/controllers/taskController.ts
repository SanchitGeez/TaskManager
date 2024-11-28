import { Request, Response } from "express";
import Task from "../models/taskModel";

// Add a new task
export const addTask = async (req: Request, res: Response) => {
    try {
        const { taskName, date } = req.body;
        const newTask = new Task({ taskName, date });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({ message: "Error adding task", error });
    }
};

// Get all tasks
export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error fetching tasks", error });
    }
};
