const Joi = require('@hapi/joi');

const schema = Joi.object().keys({
  firstName: Joi.string()
    .min(2)
    .max(255)
    .required(),
  lastName: Joi.string()
    .min(2)
    .max(255)
    .required(),
  phone: Joi.string()
    .min(11)
    .max(11)
    .regex(/[0-9]/)
    .required(),
  email: Joi.string().email({ minDomainSegments: 2 }),
  password: Joi.string()
    .min(8)
    .max(255)
});

function validateUser(signUpDetails) {
  return { error, value } = schema.validate(signUpDetails);
}

//middleware for validating user req.body
module.exports = (req, res, next) => {
  const { error, value } = validateUser(req.body);
  if (error) return res.send({ Error: error.details[0].message })
  next();
}