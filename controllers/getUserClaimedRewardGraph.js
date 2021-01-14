import { BtcRewardGraphs } from "../models/claimRewardsGraph.js";

const btcClaim = async (req, res) => {
  const { username, reward } = req.body;

  const claim = await BtcRewardGraphs.find({ username });

  res.status(200).send(claim);
};

export { btcClaim };
