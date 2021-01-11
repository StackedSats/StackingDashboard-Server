import {
  cycleDuration,
  secondsUntilNextCycle,
  targetBlockTime,
} from "../stacking/displayStaking.js";
const cycle = async (req, res) => {
  try {
    const duration = await cycleDuration();
    const second = await secondsUntilNextCycle();
    const targetBlock = await targetBlockTime();

    res
      .status(200)
      .send({ duration, secondsUntilNextCycle: second, targetBlock });
  } catch (e) {
    res.status(500).send(e);
    res.end();
  }
};

export { cycle };
