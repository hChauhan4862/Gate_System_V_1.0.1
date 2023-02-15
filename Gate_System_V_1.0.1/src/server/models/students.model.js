const Joi = require('joi');

// id            Int       @default(autoincrement())
// student_id    String    @db.VarChar(100)
// name          String    @db.VarChar(100)
// email         String    @db.VarChar(100)
// phone         String    @db.VarChar(100)
// address       String    @db.VarChar(255)
// isActive      Boolean?   @default(true)
// user_group_id   Int?      @db.Int
// rfid_card_id    Int?      @db.Int



// create student schema
const createStudentSchema = Joi.object({
    org_id: Joi.number().required(),
    student_id: Joi.string().required(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().pattern(new RegExp('^[0-9]{10}$')).required(),
    address: Joi.string().required(),
});

// update student schema
const updateStudentSchema = Joi.object({
    org_id: Joi.number().required(),
    student_id: Joi.string().required(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().pattern(new RegExp('^[0-9]{10}$')).required(),
    address: Joi.string().required(),
    user_group_id: Joi.number().required(),
    rfid_card_id: Joi.number().required(),
    isActive: Joi.boolean().required(),
});

module.exports = {
    createStudentSchema,
    updateStudentSchema,
}
