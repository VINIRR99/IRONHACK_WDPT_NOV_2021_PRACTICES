const { Router } = require('express');

const User = require("../models/User.model");

const router = Router();

router.get("/", async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (error) {res.status(500).json({ error: error.message })}
});

router.post("/", async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).json(newUser);
    } catch (error) {res.status(500).json({ error: error.message })};
});

module.exports = router;