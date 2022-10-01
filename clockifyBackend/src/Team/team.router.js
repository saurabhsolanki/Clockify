const express = require("express");
const Team = require("./team.model");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    let team = await Team.find();
    res.send(team);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.post("/add", async (req, res) => {
  let { email } = req.body;
  try {
    let user = await Team.findOne({ email });
    if (user) {
      return res.status(404).send(`${email} already Invited`);
    }
    let CreateUser = Team.create(req.body);
    res.send("User Created");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = app;
