import { btcClaim as BTCClaim } from "../models/btcClaim.js";
import { getStatus } from "../stacking/utils.js";
import { User } from "../models/index.js";
import Calculator from "stxcalculator";

const btcClaim = async (req, res) => {
  const { username, btcAddress } = req.body;

  const status = await getStatus();
  if (status.details) {
    console.log(status.details.amount_microstx);
    const amount_microstx = status.details.amount_microstx / 1000000;
    const user = await User.findOne({ username });
    const percentage = user.totalStacked / amount_microstx;
    const calculator = new Calculator();
    await calculator.init();
    const earning = calculator.annualEarningInBTC(amount_microstx);
    user.pendingBTCReward += percentage * earning;
    await user.save();

    const claim = await BTCClaim.findOneAndUpdate(
      { username },
      {
        $addToSet: {
          btcAddress: { btcAddress: btcAddress, value: user.pendingBTCReward },
        },
      },
      { new: true, upsert: true }
    );

    res.status(200).send(claim);
  } else {
    // console.log(btcAddress);
    // const claim = await BTCClaim.findOneAndUpdate(
    //   { username },
    //   {
    //     $push: {
    //       btcAddress: { btcAddress: btcAddress, value: 4485 },
    //     },
    //   },
    //   { new: true, upsert: true }
    // );

    res.status(405).send("not stacked");
    res.end();
  }
};

export { btcClaim };
