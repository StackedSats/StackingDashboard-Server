import { btcClaim as BTCClaim } from "../models/btcClaim.js";

const btcClaim = async (req, res) => {
  const { username, btcAddress } = req.body;

  const claim = await BTCClaim.findOneAsync(
    { username },
    {
      $push: { btcAddress },
    },
    { new: true, upsert: true }
  );

  res.status(200).send(claim);
};

export { btcClaim };
