const Joi = require('joi');

const users_m = Joi.object({
    uuid: Joi.string()
          .min(36)
          .max(36)
          .required(),
  
    role: Joi.number()
      .integer()
      .min(1)
      .max(2)
      .default(2)
      .required(),
  
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  
    password: Joi.string()
    .required(),
  
    firstname: Joi.string()
    .required(),
  
    lastname: Joi.string()
    .required(),
  
    gender: Joi.number()
    .integer()
    .min(1)
    .max(2)
    .default(1)
    .required(),
  
    authorized: Joi.number()
    .integer()
    .min(0)
    .max(1)
    .default(1)
    .required(),
  
    optin: Joi.number()
    .integer()
    .min(0)
    .max(1)
    .default(0)
    .required(),
  
    double_optin: Joi.number()
    .integer()
    .min(0)
    .max(1)
    .default(0)
    .required(),
  
    token: Joi.string()
    .required(),      
  });

module.exports = users_m;