const { Router } = require("express");

const User = require("../models/User.model");

const router = Router();

const { genSalt, hash } = require('bcryptjs');
const saltRounds = 10;

router.get("/", async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (error) {res.status(500).json({ error: error.message })}
});

router.post("/", async (req, res) => {
    try {
        const { username, email, password } = await req.body;

        const salt = await genSalt(saltRounds);
        const passwordHash = await hash(password, salt);

        const newUser = await User.create({ username, email, passwordHash });
        res.status(200).json(newUser);
    } catch (error) {res.status(500).json({ error: error.message })};
});

module.exports = router;