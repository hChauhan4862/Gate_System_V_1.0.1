const httpStatus = require("http-status");
const { prisma } = require("../../../prisma/myClient");
// const prisma = new PrismaClient();

const { userModel } = require("../models");

// Create a new user 
const createUser = async(req, res) => {

    const user_img = req.files['user_img'] ? req.files['user_img'].data.toString('base64') : null;
    const { org_id, name, email, password, phone_no, address, description, user_group_id, rfid_card_id } = req.body;

    console.log(req.body);
    console.log(req.files)


    try {

                // image validattion
                if (!req.files['user_img']) {
                    return res.status(httpStatus.BAD_REQUEST).send("Please provide image");
                }
                const { mimetype } = req.files['user_img'];
                if (!mimetype.includes("image")) {
                    return res.status(httpStatus.BAD_REQUEST).send("Not a valid image");
                }
                if(req.files['user_img'].size > 1000000) {
                    return res.status(httpStatus.BAD_REQUEST).send("Image size should be less than 1MB");
                }
                //extention
                const extention = req.files['user_img'].name.split(".")[1];
                if (!["jpg", "jpeg", "png"].includes(extention)) {
                    return res.status(httpStatus.BAD_REQUEST).send("Not a valid image");
                }
        // use joi validation
        const { error } = userModel.createStudentSchema.validate(req.body);
        if (error) {
           return res.status(httpStatus.BAD_REQUEST).send(error.details[0].message);
        }

        console.log("user_img", user_img);
        console.log( req.body)
        
        const user = await prisma.user.create({
            data: {
                org_id: parseInt(org_id),
                name: name,
                email: email,
                password: password,
                phone_no: phone_no,
                address: address,
                description: description,
                user_img: user_img,
                user_group_id: parseInt(user_group_id),
                rfid_card_id: parseInt(rfid_card_id),
            }
        });
        message = {
            message: "User created successfully",
            data: user
        }
        res.status(httpStatus.OK).send(message);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error + " " + error.message);
    }
};


// get all users
const getAllUsers = async(req, res) => {
    try {
        const users = await prisma.user.findMany();
        //get orgainzation name
        const usersWithOrgName = await Promise.all(users.map(async(user) => {
            const org = await prisma.organization.findUnique({
                where: {
                    id: user.org_id
                }
            });
            return {
                ...user,
                org_name: org.name
            };
        }
        ));
        //get user group name
        const usersWithUserGroupName = await Promise.all(usersWithOrgName.map(async(user) => {
            const userGroup = await prisma.user_group.findUnique({
                where: {
                    id: user.user_group_id
                }
            });
            return {
                ...user,
                user_group_name: userGroup.group_name
            };
        }
        ));
        //get rfid card name
        const usersWithRfidCardName = await Promise.all(usersWithUserGroupName.map(async(user) => {
            const rfidCard = await prisma.rfid_card.findUnique({
                where: {
                    id: user.rfid_card_id
                }
            });
            return {
                ...user,
                rfid_card_name: rfidCard.card_no
            };
        }
        ));
        res.status(httpStatus.OK).send(usersWithRfidCardName);


    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error + " " + error.message);
    }
};

// get a user by org_id
const getUserByOrgId = async(req, res) => {
    // console.log(req.params.org_id);
    try {
        const { org_id } = req.params;
        const user = await prisma.user.findMany({
            where: {
                org_id: Number(org_id),
            },
        });
        if (!user) {
            return res.status(httpStatus.NOT_FOUND).send("User not found");
        }
        res.status(httpStatus.OK).send(user);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// get a user by id
const getUserById = async(req, res) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id),
            },
        });
        if (!user) {
            return res.status(httpStatus.NOT_FOUND).send("User not found");
        }
        res.status(httpStatus.OK).send(user);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// update a user
const editUser = async(req, res) => {
    const { id } = req.params;
    console.log(req.body);
    // console.log(req.files)

    // const user_img = req.files['user_img'] ? req.files['user_img'].data.toString('base64') : null;
    const { org_id, name, email, password, phone_no, address, description, user_group_id, rfid_card_id, isActive } = req.body;
   

    try {
                  
        //  use joi validation
        const { error } = userModel.createUserSchema.validate(req.body);
        if (error) {
           return res.status(httpStatus.BAD_REQUEST).send(error.details[0].message);
        }
        
        const user = await prisma.user.update({
            where: {
                id: Number(id),
            },
            data: {
                org_id: parseInt(org_id),
                name: name,
                email: email,
                password: password,
                phone_no: phone_no,
                address: address,
                description: description,
                user_group_id: parseInt(user_group_id),
                rfid_card_id: parseInt(rfid_card_id),
                isActive: isActive,
                updatedAt: new Date(),
            },
        });
        if (!user) {
            return res.status(httpStatus.NOT_FOUND).send("User not found");
        }
        res.status(httpStatus.OK).send(user);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error + " " + error.message);
        console.log(error + " " + error.message);
    }
};

// delete a user
const deleteUser = async(req, res) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.delete({
            where: {
                id: Number(id),
            },
        });
       message ={
              message: "User deleted successfully",
            user: user
       }
       res.status(httpStatus.OK).send(message);
    } catch (error) {
        message ={
            message: "something went wrong",
            error: error + "" + error.message
        }
        res.status(httpStatus.BAD_REQUEST).send(message);
    }
};

// bulk delete user
const bulkDeleteUser = async(req, res) => {
    try {
        const { ids } = req.body;
        const user = await prisma.user.deleteMany({
            where: {
                id: {
                    in: ids,
                },
            },
        });
        if (!user) {
            return res.status(httpStatus.NOT_FOUND).send("User not found");
        }
        res.status(httpStatus.OK).send("User deleted successfully");
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};


// update image
const updateImage = async(req, res) => {
    const user_img = req.files['user_img'] ? req.files['user_img'].data.toString('base64') : null;
            // update user image
            const { id } = req.params;

    //compress image
    
    // console.log(req.files['user_img']);
    try {

        // image validattion
        if (!req.files['user_img']) {
            return res.status(httpStatus.BAD_REQUEST).send("Please provide image");
        }
        const { mimetype } = req.files['user_img'];
        if (!mimetype.includes("image")) {
            return res.status(httpStatus.BAD_REQUEST).send("Not a valid image");
        }
        if(req.files['user_img'].size > 1000000) {
            return res.status(httpStatus.BAD_REQUEST).send("Image size should be less than 1MB");
        }
        //extention
        const extention = req.files['user_img'].name.split(".")[1];
        if (!["jpg", "jpeg", "png"].includes(extention)) {
            return res.status(httpStatus.BAD_REQUEST).send("Not a valid image");
        }

        const user = await prisma.user.update({
            where: {
                id: Number(id),
            },
            data: {
               // user image is base64 encoded
                user_img: user_img,
                updatedAt: new Date(),
            },
        });
        if (!user) {
            return res.status(httpStatus.NOT_FOUND).send("User not found");
        }
        res.status(httpStatus.OK).send(user);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error + " " + error.message);
    }

};




// Export all functions
module.exports = {
    createUser,
    getAllUsers,
    getUserByOrgId,
    getUserById,
    editUser,
    deleteUser,
    bulkDeleteUser,
    updateImage,
};
        