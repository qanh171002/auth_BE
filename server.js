require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db.js");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test DB connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected");
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("Unable to connect to DB:", err));

// Simple route
app.get("/", (req, res) => {
  res.send("API is running");
});
