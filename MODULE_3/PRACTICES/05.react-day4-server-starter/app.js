require("dotenv").config();

const connectDb = require("./configs/db.config");
connectDb();

const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

const corsOptions = {
    credentials: true,
    origin: [process.env.ACCESS_CONTROL_ALLOW_ORIGIN],
    methods: ["GET", "POST", "PUT", "DELETE"]
};

app.use(cors(corsOptions));

app.use("/projects", require("./routes/project.routes"));
app.use("/tasks", require("./routes/task.routes"));

app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}
corsOptions:`, corsOptions));