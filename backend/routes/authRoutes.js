import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "secret123";

// SIGNUP
router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "User already exists" });

        const user = await User.create({ username, email, password });
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token,
        });
    } catch (err) {
        console.error("Signup error:", err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await user.matchPassword(password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token,
        });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

export default router;
