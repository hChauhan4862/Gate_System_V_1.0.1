const httpStatus = require("http-status");
const { prisma } = require("../../../prisma/myClient");
const bcrypt = require("bcrypt");
const {sign} = require("jsonwebtoken");

const SECRET_KEY = 'eyJ1c2VyX2lkIjoyLCJvcmdfaWQiOjEsInVzZXJfZ3JvdXBfaWQiOjEsImlhdCI6MTY3NzMwNzE0NiwiZXhwIjoxNjc3MzEwNzQ2fQ'
// login with email and password
const login = async (req, res) => {
    console.log(req.body)
    try {

        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(httpStatus.BAD_REQUEST).send("Please provide an email and password");
        }
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            },
            include: {
                org: true,
                user_group: true,
                rfid_card: true,
            },
        });
        if (!user) {
            return res.status(httpStatus.BAD_REQUEST).send("Please provide valid credentials");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(httpStatus.BAD_REQUEST).send("Please provide valid credentials");
        }
        const token = sign(
            {
                user_id: user.id,
                org_id: user.org_id,
                user_group_id: user.user_group_id,
            },
            SECRET_KEY,
            {
                expiresIn: "1h",
            }
        );
        let rfid_card_name;
        user.rfid_card_id === null
            ? (rfid_card_name = null)
            : (rfid_card_name = user.rfid_card.card_no);
        const trasformedUser = {
            id: user.id,
            org_id: user.org_id,
            name: user.name,
            email: user.email,
            password: user.password,
            phone_no: user.phone_no,
            address: user.address,
            description: user.description,
            user_img: user.user_img,
            user_group_id: user.user_group_id,
            rfid_card_id: user.rfid_card_id,
            isActive: user.isActive,
            org_name: user.org.name,
            user_group_name: user.user_group.group_name,
            rfid_card_name: rfid_card_name,
            token: token,
        };
        res.status(httpStatus.OK).send(trasformedUser);

       
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error + " " + error.message);
    }

   
}
    module.exports = {
        login,
    };