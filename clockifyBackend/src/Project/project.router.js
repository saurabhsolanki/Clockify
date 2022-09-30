const express = require("express");
const Project = require("./project.model");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    let project = await Project.find();
    res.send(project);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.post("/add", async () => {
  let { name } = req.body;
  try {
    let project = await Project.findOne({ name });
    if (project) {
      return res.status(404).send(`${name} project for client already exists.`);
    }
    let CreateProject = Project.create(req.body);
    res.send("Project has been created");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = app;
