import mongoose from "mongoose";

const schema = mongoose.Schema({
  username: String,
  txids: [{ delegateStx: String, delegateStxLock: String }],
});

const model = mongoose.model("pending", schema);

export { model as txIdTesting };
