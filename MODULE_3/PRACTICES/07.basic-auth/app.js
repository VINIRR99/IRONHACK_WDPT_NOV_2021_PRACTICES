require("dotenv").config();

const connectDb = require("./configs/db.config");
connectDb();

const express = require("express");
const app = express();

app.use(express.json());

app.use("/users", require("./routes/user.routes"));

app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`));