import { getStatus } from "../stacking/utils.js";
import { User } from "../models/index.js";
import Calculator from "stxcalculator";

const dailyBtcReward = async (req, res) => {
  const { username } = req.body;
  const status = await getStatus();
  if (status.details) {
    console.log(status.details.amount_microstx);
    const amount_microstx = status.details.amount_microstx / 1000000;
    const user = await User.findOne({ username });
    const percentage = user.totalStacked / amount_microstx;
    const calculator = new Calculator();
    await calculator.init();
    const earning = calculator.annualEarningInBTC(amount_microstx);
    res.status(200).send({ value: percentage * earning });
    res.end();
  } else {
    res.status(405).send("not stacked");
    res.end();
  }
};

export { dailyBtcReward };
