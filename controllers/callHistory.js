import { model as CallHistory } from "../models/index.js";
import { callHistoryValidation as validate } from "../validations/index.js";

const callHistory = {
  get: async (req, res) => {
    try {
      let data;
      if (req.params.limit) {
        data = await CallHistory.find({}).limit(req.params.limit);
      } else data = await CallHistory.find({}).limit(10);
      res.status(200).send(data);
    } catch (e) {
      res.status(500);
    }
  },
  post: async (req, res) => {
    console.log(req.body);
    const { error } = validate(req.body);
    console.log(error);
    if (error !== undefined) {
      res.status(400);
      res.end();
    }
    const { functionName, stxAddress, fee } = req.body;
    try {
      const create = await CallHistory.create({
        functionName,
        stxAddress,
        fee,
        date: Date.now(),
      });
      res.status(200).send(create);
      res.end();
    } catch (e) {
      res.status(500).send(e);
      res.end();
    }
  },
};

export { callHistory };
