import mongoose from "mongoose";

const schema = mongoose.Schema({
  username: String,
  btcAddress: [String],
});

const model = mongoose.model("pending", schema);

export { model as btcClaim };
