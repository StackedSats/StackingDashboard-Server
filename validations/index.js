import Joi from "joi";

const callHistoryValidation = (data) => {
  const schema = Joi.object({
    functionName: Joi.string(),
    stxAddress: Joi.string().min(5),
    fee: Joi.number(),
  });
  return schema.validate(data);
};

export { callHistoryValidation };
