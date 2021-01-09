import { JSONCookie } from "cookie-parser";
import Joi from "joi";

const callHistoryValidation = (data) => {
  const schema = Joi.object({
    functionName: Joi.string(),
    stxAddress: Joi.string().min(5),
    fee: Joi.number(),
  });
  return schema.validate(data);
};

const rewardHistoryValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string(),
    date: Joi.date(),
    from: Joi.string(),
    to: Joi.string(),
    reward: Joi.number(),
  });

  return schema.validate(data);
};

const userValidation = (data) => {
  const schema = Joi.object({
    userName: Joi.string(),
    password: Joi.string(),
  });

  return schema.validate(data);
};

export { callHistoryValidation, rewardHistoryValidation, userValidation };
