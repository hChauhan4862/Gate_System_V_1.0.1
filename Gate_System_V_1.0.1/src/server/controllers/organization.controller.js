const httpStatus = require("http-status");
const { prisma } = require("../../../prisma/myClient");
// const prisma = new PrismaClient();
// import joi validation
const { organizationModel } = require("../models");





const createOrg = async (req, res) => {


    try {
    // use joi validation
    const { error } = organizationModel.createOrgSchema.validate(req.body);
    if (error) {
        res.status(httpStatus.BAD_REQUEST).send(error.details[0].message);
    }else{
        const result = await prisma.organization.create({
            data: {
                name: req.body.name,
                address: req.body.address,
                contact_no: req.body.contact_no,
                contact_person: req.body.contact_person,
                description: req.body.description,
                email: req.body.email,
            },
        });
        const message = {
            message: "Organization created successfully",
            data: result,
        };
        res.status(httpStatus.OK).send(message);
    }

    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
};

// get all organization
const getAllOrg = async (req, res) => {
    try {
        const result = await prisma.organization.findMany();
        res.status(httpStatus.OK).send(result);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
};

// get Api by id
const getOrgById = async (req, res) => {
    try {
        const result = await prisma.organization.findUnique({
            where: {
                id: Number(req.params.id),
            },
        });
        if(!result){
            return res.status(httpStatus.NOT_FOUND).send("Organization not found");
        }
        res.status(httpStatus.OK).send(result);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
};

// delete api
const deleteOrg = async (req, res) => {
    try {
        const result = await prisma.organization.delete({
            where: {
                id: Number(req.params.id),
            },
        });
        const message = {
            message: "Organization deleted successfully",
            data: result,
        };
        res.status(httpStatus.OK).send(message);
    } catch (error) {
        message = {
            message: "Useed In Group Cannot Delete Organization. Please Delete Group First",
            data: error,
        };
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(message);
    }
};


//edit api
const editOrg = async (req, res) => {
    try {
        // use joi validation
        const { error } = organizationModel.createOrgSchema.validate(req.body);
        if (error) {
            res.status(httpStatus.BAD_REQUEST).send(error.details[0].message);
        }

        const result = await prisma.organization.update({
            where: {
                id: Number(req.params.id),
            },
            data: {
                name: req.body.name,
                address: req.body.address,
                contact_no: req.body.contact_no,
                contact_person: req.body.contact_person,
                description: req.body.description,
                isActive: req.body.isActive,
                updatedAt: new Date(),
            },
        });
        const message = {
            message: "Organization updated successfully",
            data: result,
        };
        res.status(httpStatus.OK).send(message);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
};

module.exports = {
    createOrg,
    getAllOrg,
    getOrgById,
    deleteOrg,
    editOrg,

}