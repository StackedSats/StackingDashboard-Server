import { txIdTesting } from "../models/txIdTesting.js";
import { User } from "../models/user.js";
import { delegateStx } from "../stacking/delegateAndCommit.js";
import axios from "axios";

const transactionRecord = async (req, res) => {
  const { username, amountSTX, stacker, txId } = req.body;
  console.log(username, amountSTX, stacker, txId);
  const check = setInterval(async () => {
    const status = await axios.get(
      `https://stacks-node-api.testnet.stacks.co/extended/v1/tx/${txId}`
    );
    if (status.data.tx_status === "success") {
      try {
        console.log("fsdfsdfsdf3333333333");
        const delegateConfirm = await delegateStx({
          address: stacker.testnet,
          amount: amountSTX,
        });
        console.log("delegates ...");

        const user = await User.findOne({ username });
        user.totalStacked += amountSTX;
        user.save();
        res.status(200).send(delegateConfirm);
        res.end();

        stop();
      } catch (e) {
        stop();
      }
    } else if (status.data.tx_status === "pending") {
      console.log("pending...");
    } else {
      stop();
    }
  }, 60000);

  const stop = () => {
    clearInterval(check);
  };
};

export { transactionRecord };
