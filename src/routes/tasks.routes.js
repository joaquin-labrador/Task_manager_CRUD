import { Router } from "express";
import tasksController from "../controller/tasks.controller.js";
const router = Router();
//routes

router.post("/tasks/add", tasksController.tasksAdd);

router.get("/",tasksController.getTasks);

router.get("/tasks/:id/toggleDone", tasksController.taskToggleDone);

router.get("/tasks/:id/delete", tasksController.deleteTask);

router.get("/tasks/:id/update", tasksController.updateTask);

router.post("/tasks/:id/update", tasksController.updateTaskPost);

export default router;
