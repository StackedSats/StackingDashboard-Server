import { CallHistory } from "../models/";
import { callHistoryValidation as validate } from "../validations/index";

const callHistory = {
  get: async (req, res) => {
    try {
      let data;
      if (req.params.limit) {
        data = await CallHistory.find({}).limit(req.params.limit);
      } else data = await CallHistory.find({}).limit(20);
      res.status(200).send(data);
    } catch (e) {
      res.status(500);
    }
  },
  post: async (req, res) => {
    const { error, value } = validate(req.body);
    if (error === undefined) {
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
      res.status(500);
      res.end();
    }
  },
};

export { callHistory };
