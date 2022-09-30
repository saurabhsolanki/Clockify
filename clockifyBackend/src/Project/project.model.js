const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Project = mongoose.model("project", projectSchema);

module.exports = Project;
