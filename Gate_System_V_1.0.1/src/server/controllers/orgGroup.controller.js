const httpStatus = require("http-status");
const { prisma } = require("../../../prisma/myClient");
// const prisma = new PrismaClient();
// import joi validation
const { orgGroupModel } = require("../models");


// Create a new organization group
const createOrgGroup = async (req, res) => {
    console.log(req.body);
    try {
        // use joi validation
        const { error } = orgGroupModel.createOrgGroupSchema.validate(req.body);
        if (error) {
            res.status(httpStatus.BAD_REQUEST).send(error.details[0].message);
        }
        const { name, org_id, description } = req.body;

        const result = await prisma.organization_group.create({
            data: {
                org_id: Number(org_id),
                name: name,
                description: description,
            },
        });
        message = {
            message: "Organization group created successfully",
            data: result,
        };
        res.status(httpStatus.OK).send(message);
    }
    catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
};
}

// Get all the organization groups
const getAllOrgGroups = async (req, res) => {
    try {
        const result = await prisma.organization_group.findMany();
// add organization name to the result
        const orgs = await prisma.organization.findMany();
        const orgsMap = orgs.reduce((acc, org) => {
            acc[org.id] = org.name;
            return acc;
        }, {});
        const resultWithOrgName = result.map((orgGroup) => {
            orgGroup.org_name = orgsMap[orgGroup.org_id];
            return orgGroup;
        });
        res.status(httpStatus.OK).send(resultWithOrgName);
    }
    catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
}


// Get all the organization groups by organization id
const getAllOrgGroupsByOrgId = async (req, res) => {
    try {
        const result = await prisma.organization_group.findMany({
            where: {
                org_id: Number(req.params.org_id),
            },
        });
        if(result.length == 0){
            return res.status(httpStatus.NOT_FOUND).send("No organization groups found");
        }
        res.status(httpStatus.OK).send(result);
    }
    catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
}

// get organization group by id
const getOrgGroupById = async (req, res) => {
    try {
        const result = await prisma.organization_group.findUnique({
            where: {
                id: Number(req.params.id),
            },
        });
        if(!result){
            return res.status(httpStatus.NOT_FOUND).send("Recodes Not Found");
        }
        res.status(httpStatus.OK).send(result);
    }
    catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
}

// Update organization group by id
const editOrgGroupById = async (req, res) => {
    try {
        // use joi validation
        const { error } = orgGroupModel.createOrgGroupSchema.validate(req.body);
        if (error) {
            res.status(httpStatus.BAD_REQUEST).send(error.details[0].message);
        }
        const result = await prisma.organization_group.update({
            where: {
                id: Number(req.params.id),
            },
            data: {
                org_id: Number(req.body.org_id),
                name: req.body.name,
                description: req.body.description,
                isActive: req.body.isActive,
                updatedAt: new Date(),
            },
        });
       message = {
            message: "Organization group updated successfully",
            data: result,
        };
        res.status(httpStatus.OK).send(message);
    }
    catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
}

//delete organization group by id
const deleteOrgGroupById = async (req, res) => {
    try {
        const result = await prisma.organization_group.delete({
            where: {
                id: Number(req.params.id),
            },
        });
        message = {
            message: "Organization group deleted successfully",
            data: result,
        };
        res.status(httpStatus.OK).send(message);
    }
    catch (error) {
        message = {
            message: "Organization Group Can't be deleted. It is already in use.",
            data: error,
        };
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(message);
    }
}

//bulk delete organization group by id
const bulkDeleteOrgGroupById = async (req, res) => {
    console.log(req.body.id)
    try {
        const result = await prisma.organization_group.deleteMany({
            where: {
                id: {
                    in: req.body.id,
                },
            },
        });
        if(!result){
            return res.status(httpStatus.NOT_FOUND).send("Recodes Not Found");
        }
        res.status(httpStatus.OK).send(result);
    }
    catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
}


// Export all the functions
module.exports = {
    createOrgGroup,
    getAllOrgGroups,
    getAllOrgGroupsByOrgId,
    getOrgGroupById,
    editOrgGroupById,
    deleteOrgGroupById,
    bulkDeleteOrgGroupById,
};