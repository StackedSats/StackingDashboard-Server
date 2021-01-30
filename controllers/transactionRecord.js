import { txIdTesting } from "../models/txIdTesting.js";
import { User } from "../models/user.js";

const transactionRecord = async (req, res) => {
  const { txids, username, stxValue } = req.body;

  const query = {
    $set: { username },
    $addToSet: { txids },
  };
  const add = await txIdTesting.findOneAndUpdate({ username }, query, {
    new: true,
    upsert: true,
  });

  const user = await User.findOne({ username });
  user.totalStacked += stxValue;
  user.save();
  res.status(200).send(add);
  res.end();
};

export { transactionRecord };
