
const Joi = require('joi');

// create organization schema
const createOrgSchema = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    contact_no: Joi.string().pattern(new RegExp('^[0-9]{10}$')).required(),
    contact_person: Joi.string().required(),
    description: Joi.string().required(),
    email: Joi.string().email().required(),
    isActive: Joi.boolean(),
});


module.exports = {
    createOrgSchema,
};
