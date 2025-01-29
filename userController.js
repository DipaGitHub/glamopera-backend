const User = require("../../models/user");

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new user
const addUser = async (req, res) => {
  try {
    const { name, email, phone, username, password } = req.body;

    // Check for existing email or username
    const emailExists = await User.findOne({ email });
    const usernameExists = await User.findOne({ username });

    if (emailExists || usernameExists) {
      return res.status(400).json({
        message: emailExists
          ? "Email is already registered"
          : "Username is already taken",
      });
    }

    const newUser = new User({ name, email, phone, username, password });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getUsers, addUser };
