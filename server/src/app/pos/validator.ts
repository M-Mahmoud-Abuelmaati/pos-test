import Joi from "joi";
import validator from "../../utils/validator";

const rank = Joi.object({
  // Validating the body with finalScore to be a number starting from 0 to 100 and required
  body: {
    finalScore: Joi.number().min(0).max(100).required(),
  },
});

export default {
  rank: validator(rank),
};
