const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config(); // Load environment variables
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Start the server
const PORT = process.env.PORT || 8050;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//user apis
const userRoutes = require("./routes/User/userRoutes");
app.use("/api/users", userRoutes);

//Auth api
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
