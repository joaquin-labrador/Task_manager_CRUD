import Task from "../models/Task.js";

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().lean(); //lean() transform mongoDB object to JSON object
    res.render("index", { tasks: tasks });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
};

const tasksAdd = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
    res.redirect("/apiTask/v1.0");
  } catch (error) {
    return res.render("error", { errorMessage: error.message });
  }
};

const taskToggleDone = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    task.done = !task.done; //if is true, set false, if is false, set true / (false = false) = true
    await task.save();
    res.redirect("/apiTask/v1.0");
  } catch (error) {
    return res.render("error", { errorMessage: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/apiTask/v1.0");
  } catch (error) {
    return res.render("error", { errorMessage: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id).lean();
    res.render("update", { task: task });
  } catch (error) {
    return res.render("error", { errorMessage: error.message });
  }
};

const updateTaskPost = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/apiTask/v1.0");
};

export default {
  getTasks,
  tasksAdd,
  taskToggleDone,
  deleteTask,
  updateTask,
  updateTaskPost,
};
