const Task = require("../models/Task");

// Get all tasks
const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

// Create task
const createTask = async (req, res, next) => {
  try {
    const task = new Task(req.body);
    const createdTask = await task.save();
    res.status(201).json(createdTask);
  } catch (error) {
    next(error);
  }
};

// Update task
const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
  } catch (error) {
    next(error);
  }
};

// Delete task
const deleteTask = async (req, res, next) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (error) {
    next(error);
  }
};

// Get single task
const getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    res.json(task);
  } catch (error) {
    next(error);
  }
};

// Search tasks
const searchTasks = async (req, res, next) => {
  try {
    const { query } = req.query;
    const tasks = await Task.find({ title: { $regex: query, $options: "i" } });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTaskById,
  searchTasks,
};
