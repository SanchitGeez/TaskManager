import express from "express";
import { addTask, getTasks } from "../controllers/taskController";

const router = express.Router();

router.route("/").post(addTask).get(getTasks);

export default router;
