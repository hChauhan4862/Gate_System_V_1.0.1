const Joi = require('joi');

// create organization Group schema
const createOrgGroupSchema = Joi.object({
    name: Joi.string().required(),
    org_id: Joi.number().required(),
    description: Joi.string().required(),
    isActive: Joi.boolean(),
});

module.exports = {
    createOrgGroupSchema,
};