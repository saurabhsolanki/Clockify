const mongoose = require("mongoose");

const timeTrackerSchema = new mongoose.Schema({
  text: { type: String, required: true },
  select: { type: String },
  StartTime: { type: Number },
  endTime: { type: Number },
  timer: { type: Number },
});

const TimeTracker = mongoose.model("timetracker", timeTrackerSchema);
module.exports = TimeTracker;
