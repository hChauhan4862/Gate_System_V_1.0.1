const Joi = require('joi');

// create user schema
const createStudentSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    phone_no: Joi.string().pattern(new RegExp('^[0-9]{10}$')).required(),
    address: Joi.string().required(),
    description: Joi.string(),
// user image size validation
    user_img: Joi.object({
        size: Joi.number().max(1000000).required(),
    })
    // user image type validation
    .unknown(true)
    .messages({
        'object.unknown': '"user_img" must be of type [png,jpg,jpeg]',
    }),
    user_group_id: Joi.number().required(),
    rfid_card_id: Joi.number(),
    org_id: Joi.number().required(),
    isActive: Joi.boolean(),
});





module.exports = {
    createStudentSchema,
    
};