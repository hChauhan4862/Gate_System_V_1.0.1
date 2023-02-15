
const validateUserImage = (req, res, next) => {
    const { error } = createUserSchema.validate(req.body);
    if (error) {
        res.status(httpStatus.BAD_REQUEST).send(error.details[0].message);
    }
    next();
};

module.exports = validateUserImage;