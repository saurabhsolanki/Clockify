const express = require("express");

const teamRouter = require("./Team/team.router");
const projectRouter = require("./Project/project.router");

const app = express();
app.use(express.json());
app.use("/teams", teamRouter);
app.use("/projects", projectRouter);

app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});

app.listen(8000, () => {
  console.log("started server 8080");
});
