const express = require("express");
const cors = require("cors");
const connect = require("./config/db");

const teamRouter = require("./Team/team.router");
const timeTracker = require("./TimeTracker/TimeTracker.router");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/teams", teamRouter);
app.use("/timetrackers", timeTracker);

app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});

app.listen(8000, async () => {
  try {
    await connect();
    console.log("server is started at port 8000");
  } catch (error) {
    console.log("error");
  }
});
