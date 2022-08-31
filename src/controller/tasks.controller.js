import Task from "../models/Task.js";


const getTasks = async (req, res) => {
  const tasks = await Task.find().lean(); //lean() transform mongoDB object to JSON object

  res.render("index.hbs", { tasks: tasks });
};

const tasksAdd = async (req, res) => {
  const task = Task(req.body);
  await task.save();
  res.redirect("/apiTask/v1.0");
};

const taskToggleDone = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done; //if is true, set false, if is false, set true / (false = false) = true
  await task.save();
  res.redirect("/apiTask/v1.0");
};

export default {
  getTasks,
  tasksAdd,
  taskToggleDone,
};
