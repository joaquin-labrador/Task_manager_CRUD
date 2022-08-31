import { Router } from "express";
import tasksController from "../controller/tasks.controller.js";
const router = Router();
//routes

router.post("/tasks/add", tasksController.tasksAdd);

router.get("/",tasksController.getTasks);

router.get("/tasks/:id/toggleDone", tasksController.taskToggleDone);

export default router;
