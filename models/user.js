import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const schema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
  stxAddress: [String],
  btcAddress: [String],
});

schema.methods.generateAuthToken = function () {
  console.log(this);
  const token = jwt.sign(
    {
      _id: this._id,
      username: this.username,
    },
    // eslint-disable-next-line no-undef
    process.env.jwtsecret
  );
  return token;
};

const User = mongoose.model("Users", schema);

export { User };
