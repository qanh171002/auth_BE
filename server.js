require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/userRoute.js");
const sequelize = require("./config/db.js");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: ["https://auth-fe-livid.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api", userRoute);

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
