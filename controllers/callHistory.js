import { model as CallHistory } from "../models/index.js";
import { callHistoryValidation as validate } from "../validations/index.js";
import axios from "axios";

const callHistory = {
  get: async (req, res) => {
    // try {
    //   let data;
    //   if (req.params.limit) {
    //     data = await CallHistory.find({}).limit(req.params.limit);
    //   } else data = await CallHistory.find({}).limit(10);
    //   res.status(200).send(data);
    // } catch (e) {
    //   res.status(500);
    // }

    const data = await axios.get(
      "https://stacks-node-api.testnet.stacks.co/extended/v1/address/ST000000000000000000002AMW42H.pox/transactions?limit=30"
    );
    const parse = data.data.results.map((value) => {
      return {
        functionName: value.contract_call.function_name,
        stxAddress: value.sender_address,
        fee: value.fee_rate,
        date: new Date(value.burn_block_time),
      };
    });
    res.status(200).send(parse);
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
      console.log({
        functionName,
        stxAddress,
        fee,
        date: Date.now(),
      });
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
