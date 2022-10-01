const { Router } = require("express");
const TimeTracker = require("./TimeTracker.model");

const app = Router();

// get the user
app.get("/", async (req, res) => {
  try {
    const user = await Post.find();
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/", async (req, res) => {
  try {
    const user = await TimeTracker.create(req.body);
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// delete
app.delete("/:id", async (req, res) => {
  try {
    const user = await TimeTracker.findByIdAndDelete(req.params.id);
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = app;
