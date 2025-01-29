const bcrypt = require("bcrypt");
const User = require("../../models/user");

const signup = async (req, res) => {
  try {
    const { name, email, phone, username, password } = req.body;

    // Check if email or username exists
    if ((await User.findOne({ email })) || (await User.findOne({ username }))) {
      return res
        .status(400)
        .json({ message: "Email or Username already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the new user
    const newUser = new User({
      name,
      email,
      phone,
      username,
      password: hashedPassword,
    });
    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = signup;
