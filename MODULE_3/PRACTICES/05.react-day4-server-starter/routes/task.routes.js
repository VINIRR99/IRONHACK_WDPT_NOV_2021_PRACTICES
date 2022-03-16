const { Router } = require("express");

const Task = require("../models/task-model");

const router = Router();

router.post("/", async (req, res) => {
    try {
        const newTask = await Task.create(req.body);
        res.status(200).json(newTask);
    } catch (error) {res.status(500).json({ error: error.message })};
});

router.get("/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.status(200).json(task);
    } catch (error) {res.status(500).json({ error: error.message })};
});

router.put("/:id", async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedTask);
    } catch (error) {res.status(500).json({ error: error.message })};
});

router.delete('/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json();
    } catch (error) {res.status(500).json({ message: error.message })};
});

module.exports = router;