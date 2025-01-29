const express = require("express");
const { getUsers, addUser } = require("../../controllers/User/userController");
const router = express.Router();

// GET all users
router.get("/", getUsers);

// POST add a new user
router.post("/", addUser);

module.exports = router;
