const Joi = require("joi");

// Define the validation schema using joi
const pingLinkSchemaValidator = Joi.object({
    name: Joi.string().required().lowercase(),
    description: Joi.string().optional().lowercase(),
    includedContent: Joi.string().required(),
    contentType: Joi.string().optional(),
    text: Joi.string().optional(),
    paymentType: Joi.string().required(),
    priceType: Joi.string().required(),
    priceAmount: Joi.number().required(),
    priceCurrency: Joi.string().required(),
    network: Joi.string().required(),
    receiveAmount: Joi.string().required(),
    receiveCurrency: Joi.string().required(),
    receiveType: Joi.string().required(),
    receiverWallet: Joi.string().required(),
    receiverWalletNetwork: Joi.string().required()
  });

  module.exports={pingLinkSchemaValidator};