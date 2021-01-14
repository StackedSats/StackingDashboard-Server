import { txIdTesting } from "../models/txIdTesting.js";

const transactionRecord = async (req, res) => {
  const { tx, username } = req.body;

  const query = {
    $set: { username },
    $addToSet: { txids: tx },
  };
  const add = await txIdTesting.findOneAndUpdate({ username }, query, {
    new: true,
    upsert: true,
  });
  res.status(200).send(add);
  res.end();
};

export { transactionRecord };
