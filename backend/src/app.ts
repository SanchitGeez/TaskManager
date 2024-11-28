import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import taskRoutes from "./routes/taskRoutes";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Home Route
app.get("/", (req, res) => {
    res.send("serverhome");
  });

app.use("/api/tasks", taskRoutes);

export default app;
