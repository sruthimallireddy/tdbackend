const express = require("express");
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTaskById,
  searchTasks,
} = require("../controllers/taskController");

const router = express.Router();

router.get("/", getTasks);
router.get("/search", searchTasks);
router.get("/:id", getTaskById);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
