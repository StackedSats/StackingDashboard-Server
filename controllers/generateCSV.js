import { Parser } from "json2csv";
import {
  btcRewardHistory as BTCReward,
  rewardHistory,
} from "../models/index.js";

const btcRewardCSV = async (req, res) => {
  try {
    const list = await BTCReward.findOne({
      username: req.params.id,
    })
      .populate("txs")
      .select("txs")
      .lean()
      .exec();

    const json2csv = new Parser({
      fields: [
        {
          label: "From",
          value: "from",
        },
        {
          label: "To",
          value: "to",
        },
        {
          label: "Date",
          value: "date",
        },
        {
          label: "Reward",
          value: "reward",
        },
      ],
    });
    const csv = json2csv.parse(list.txs);
    res.statusCode = 200;

    res.setHeader("Content-Type", "text/csv");

    res.attachment("Report.csv");

    res.send(csv);
  } catch (e) {
    res.status(500).send(e);
    res.end();
  }
};

const rewardHistoryCSV = async (req, res) => {
  try {
    const list = await BTCReward.findOne({
      username: req.query.id,
    })
      .populate("txs")
      .select("txs")
      .lean()
      .exec();

    console.log(list);
    res.statusCode = 200;

    res.setHeader("Content-Type", "text/csv");

    res.setHeader("Content-Disposition", "attachment; filename=" + filename);

    res.csv(list, true);

    res.end();
  } catch (e) {
    res.status(500).send(e);
    res.end();
  }
};

const modelMap = {
  btwRewardHistory: btcRewardCSV,
  rewardHistory: rewardHistoryCSV,
};

const generateCSV = async (req, res, next) => {
  await btcRewardCSV(req, res);
};
export { generateCSV };
