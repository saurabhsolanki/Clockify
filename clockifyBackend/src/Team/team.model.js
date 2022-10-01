const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  billableRate: { type: Number, min: 0 },
});

const Team = mongoose.model("team", teamSchema);

module.exports = Team;
