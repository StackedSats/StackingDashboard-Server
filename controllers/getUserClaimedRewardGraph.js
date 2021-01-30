import { BtcRewardGraphs } from "../models/claimRewardsGraph.js";

const btcClaim = async (req, res) => {
  const { username } = req.body;

  try {
    const claim = await BtcRewardGraphs.find({ username });

    res.status(200).send(claim);
  } catch (e) {
    res.status(500).send(e);
  }
};

export { btcClaim as getUserClaimedRewardsGraph };
