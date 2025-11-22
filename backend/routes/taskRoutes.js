import express from "express";
import Task from "../models/Task.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Apply protect middleware to all task routes
router.use(protect);

// When creating a task, attach user
router.post("/", async (req, res) => {
  const { title } = req.body;
  try {
    const newTask = await Task.create({ title, user: req.user._id });
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// When fetching tasks, get only for logged-in user
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// POST create task
router.post("/", async (req, res) => {
  const { title } = req.body;
  const newTask = await Task.create({ title });
  res.status(201).json(newTask);
});

// PUT update task
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating task" });
  }
});


// DELETE task
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    console.log("Received delete ID:", id);

    if (!id) {
      return res.status(400).json({ message: "Task ID is required" });
    }

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(deletedTask);

  } catch (error) {
    console.error("DELETE error:", error);
    res.status(500).json({ message: "Server error", error });
  }
});



export default router;
