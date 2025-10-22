import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

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
  const { id } = req.params;
  const { title, completed } = req.body;
  const updated = await Task.findByIdAndUpdate(
    id,
    { title, completed },
    { new: true }
  );
  res.json(updated);
});

// DELETE task
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

export default router;
