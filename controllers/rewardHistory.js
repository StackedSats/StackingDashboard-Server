import mongoose from "mongoose";
import RewardModel from "../models/rewardHIstory";

import { rewardHistoryValidation } from "../validations";

const rewardHistory = {
  get: async (req, res) => {
    try {
      let data;
      if (req.params.limit) {
        data = await RewardModel.find({}).limit(req.params.limit);
      } else {
        data = await RewardModel.find({}).limit(4);
      }

      res.status(200).send(data);
      res.end();
    } catch (e) {
      res.status(500);
      res.end();
    }
  },
  post: async (req, res) => {
    const { error, result } = rewardHistoryValidation(req.body);

    if (error === undefined) {
      res.status(400);
      res.end();
    }

    try {
      const reward = await RewardModel.create(req.body);
      res.status(200).send(reward);
      res.end();
    } catch (e) {
      res.status(500);
      res.end();
    }
  },
};

export { rewardHistory };
