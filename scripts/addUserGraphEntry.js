import { BtcRewardGraphs } from "../models/claimRewardsGraph.js";

const btcClaim = async (req, res) => {
  const { username, reward } = req.body;

  const claim = await BtcRewardGraphs.create({ username, reward });

  return claim;
};

export { btcClaim };
