import { txIdTesting } from "../models/txIdTesting.js";
import { User } from "../models/user.js";
import { delegateStx } from "../stacking/delegateAndCommit.js";

const transactionRecord = async (req, res) => {
  const { username, amountSTX, stacker } = req.body;

  try {
    const delegateConfirm = await delegateStx({
      address: stacker,
      amount: amountSTX,
    });
    console.log("delegates ...");

    const user = await User.findOne({ username });
    user.totalStacked += amountSTX;
    user.save();
    res.status(200).send(delegateConfirm);
    res.end();
  } catch (e) {
    console.log(e);
    res.status(500);
    res.end();
  }
};

export { transactionRecord };
