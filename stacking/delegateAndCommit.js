import client from "./generateAccount.js";
import config from "../config.js";
import { getCoreInfo } from "./lockStx.js";

async function delegateStx({ address, amount }) {
  const delegatorPrivateKey = config.keyInfo.privateKey;
  const delegatorBtcAddress = config.keyInfo.btcAddress;

  //   const info = await getCoreInfo();
  let cycles = 3;

  const delegetateStackResponses = await client.delegateStackStx({
    stacker: address,
    amount,
    poxAddress: delegatorBtcAddress,
    burnBlockHeight: 2092,
    cycles,
    privateKey: delegatorPrivateKey,
  });

  console.log(delegetateStackResponses);

  const rewardCycle = 12;

  const delegetateCommitResponse = await client.stackAggregationCommit({
    poxAddress: delegatorBtcAddress,
    rewardCycle,
    privateKey: delegatorPrivateKey,
  });

  console.log(delegetateCommitResponse);
  return delegetateCommitResponse;
}

export { delegateStx };
