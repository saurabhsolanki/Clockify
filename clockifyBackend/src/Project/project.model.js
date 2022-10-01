const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String },
  client: { type: String },
  tracked: { type: String },
  amount: { type: String },
  progress: { type: String },
  access: { type: String },
});

const Project = mongoose.model("project", projectSchema);

module.exports = Project;
