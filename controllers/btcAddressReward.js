import { EROFS } from "constants";
import {
  btcRewardHistory as BTCReward,
  rewardHistory,
} from "../models/index.js";

import { rewardHistoryValidation } from "../validations/index.js";

const btcAddressReward = {
  post: async (req, res) => {
    try {
      const list = await BTCReward.findOne({
        username: req.body.username,
      })
        .populate("txs")
        .slice("txs", 4)
        .select("txs")
        .lean()
        .exec();

      res.status(200).send(list);
      res.end();
    } catch (e) {
      res.status(500).send(e);
      res.end();
    }
  },
  put: async (req, res) => {
    const { error } = rewardHistoryValidation(req.body);
    if (error) {
      res.status(401).send(error);
      res.end();
    }

    const reward = await rewardHistory.create(req.body);
    var update = {
      $addToSet: { txs: reward.id },
    };

    try {
      const btcReward = await BTCReward.findOneAndUpdate(
        { username: req.body.username },
        update,
        { new: true, upsert: true }
      );
      console.log(btcReward);
      res.status(200).send(btcReward);
      res.end();
    } catch (e) {
      res.staus(500).send(e);
      res.end();
    }
  },
};

export { btcAddressReward };
