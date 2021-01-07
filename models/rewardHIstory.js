import mongoose from "mongoose";

const schema = mongoose.Schema({
  date: { type: Date, required: true, default: Date.now },
  from: { type: String, required: true },
  to: { type: String, required: true },
  reward: { type: Number, required: true },
});

const model = mongoose.model("rewardHistory", schema);

export default model;
