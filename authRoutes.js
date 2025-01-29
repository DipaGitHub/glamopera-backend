const express = require("express");
const signup = require("../controllers/Auth/signup");
const login = require("../controllers/Auth/login");
const router = express.Router();

// Signup route
router.post("/signup", signup);

// Login route
router.post("/login", login);

module.exports = router;
