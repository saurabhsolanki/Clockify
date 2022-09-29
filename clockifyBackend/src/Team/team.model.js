const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  billableRate: { type: Number, min: 0 },
});

const Team = mongoose.model("team", teamSchema);

module.exports = Team;
