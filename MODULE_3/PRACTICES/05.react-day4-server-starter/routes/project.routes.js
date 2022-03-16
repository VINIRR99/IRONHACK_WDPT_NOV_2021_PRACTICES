const { Router } = require("express");

const Project = require("../models/project-model");

const router = Router();

router.get("/", async (req, res) => {
    try {
        const allProjects = await Project.find();
        res.status(200).json(allProjects);
    } catch (error) {res.status(500).json({ error: error.message })}
});

router.post("/", async (req, res) => {
    try {
        const newProject = await Project.create(req.body);
        res.status(200).json(newProject);
    } catch (error) {res.status(500).json({ error: error.message })};
});

router.get("/:id", async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        res.status(200).json(project);
    } catch (error) {res.status(500).json({ error: error.message })};
});

router.put("/:id", async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedProject);
    } catch (error) {res.status(500).json({ error: error.message })};
});

router.delete('/:id', async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.status(200).json();
    } catch (error) {res.status(500).json({ message: error.message })};
});

module.exports = router;