const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  type: { type: String, enum: ["INCOME", "EXPENSE"] },
  category: String,
  date: { type: Date, default: Date.now },
  notes: String
}, { timestamps: true });

module.exports = mongoose.model("Record", recordSchema);