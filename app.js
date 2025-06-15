const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const sequelize = require("./config/db");
const authRoute = require("./routes/auth.route");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/v1/auth", authRoute);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const PORT = process.env.PORT || 4000;

app.listen(PORT || 4000, () => {
  console.log(`Server running on port ${PORT}`);
});
