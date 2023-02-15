const httpStatus = require("http-status");
const { prisma } = require("../../../prisma/myClient");
// const prisma = new PrismaClient();
const SerialPort = require('serialport');


// Create a new device
const createDevice = async(req, res) => {
    // console.log(req.body);
    try {
        const { friendlyName, locationId, manufacturer,path,pnpId, productId,serialNumber,vendorId} = req.body;
        if(!friendlyName || !manufacturer || !path || !pnpId ){
            return res.status(httpStatus.BAD_REQUEST).send("Please fill all the fields");
        }
        const device = await prisma.devices_setup.create({
            data: {
                friendlyName: friendlyName,
                locationId: locationId,
                manufacturer: manufacturer,
                path: path,
                pnpId: pnpId,
                productId: productId,
                serialNumber: serialNumber,
                vendorId: vendorId,
            },
        });
        res.status(httpStatus.CREATED).send(device);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error + "" + error.message);
    }

};

// get all devices
const getAllDevices = async(req, res) => {
    try {
        const devices = await prisma.devices_setup.findMany();
        // add door name in the response
        const devicesWithDoorName = await Promise.all(devices.map(async(device) => {
            if(!device.door_id){
                return {
                    ...device,
                    door_name: null
                };
            }
            const door = await prisma.doors.findUnique({
                where: {
                    id: device.door_id
                }
            });
            return {
                ...device,
                door_name: door.name
            };
        }));
        // devicetype name in the response
        const devicesWithDeviceTypeName = await Promise.all(devicesWithDoorName.map(async(device) => {
            if(!device.devicesType){
                return {
                    ...device,
                    device_type_name: null,
                    devices_type_opration : null
                };
            }
            const deviceTypeName = await prisma.device_type.findUnique({
                
                where: {
                    id: device.devicesType
                }
            });
            return {
                ...device,
                device_type_name: deviceTypeName.name,
                devices_type_opration : deviceTypeName.operation

            };
        }));
        res.status(httpStatus.OK).send(devicesWithDeviceTypeName);
        // res.status(httpStatus.OK).send(devices);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error +'' + error.message);
    }
};

// get all devices from system
let portsList = [] //['COM1','COM2','COM3']
const getPorts = async(req, res) => {
    try{
            SerialPort.SerialPort.list().then(ports => {
                let temp =[]
                ports.forEach(port => {
                temp.push({port})
                // console.log(port)
            });
            portsList=temp
            res.status(200).send(portsList)
        }
        )
        }catch(err){
            res.status(400).send(err)
        }
    };


// get devices by id
const getDeviceById = async(req, res) => {
    try {
        const { id } = req.params;
        const device = await prisma.devices_setup.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        res.status(httpStatus.OK).send(device);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error +'' + error.message);
    }
};


    //edit device by id
const editDeviceById = async(req, res) => {
    try {
        const { id } = req.params;
        const { friendlyName, locationId, manufacturer,path,pnpId, productId,serialNumber,vendorId,isActive, devicesType, door_id} = req.body;
        const device = await prisma.devices_setup.update({
            where: {
                id: parseInt(id)
            },
            data: {
                friendlyName: friendlyName,
                locationId: locationId,
                manufacturer: manufacturer,
                path: path,
                pnpId: pnpId,
                productId: productId,
                serialNumber: serialNumber,
                vendorId: vendorId,
                isActive: isActive,
                devicesType: parseInt(devicesType),
                door_id: parseInt(door_id),
                updatedAt: new Date()
                }
        });
        const message = {
            message: "Device updated successfully",
            device : device
        }
        res.status(httpStatus.OK).send(message);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error +'' + error.message);
    }
};

// delete device by id
const deleteDeviceById = async(req, res) => {
    try {
        const { id } = req.params;
        const device = await prisma.devices_setup.delete({
            where: {
                id: parseInt(id)
            }
        });
        const message = {
            message: "Device deleted successfully",
            device : device
        }
        res.status(httpStatus.OK).send(message);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error +'' + error.message);
    }
};

// map device 
const mapDevice = async(req, res) => {
    try {
        const { id } = req.params;
        const { door_id, devicesType } = req.body;
        const device = await prisma.devices_setup.update({
            where: {
                id: parseInt(id)
            },
            data: {
                door_id: parseInt(door_id),
                devicesType: parseInt(devicesType),
                updatedAt: new Date()
            }
        });
        const message = {
            message: "Device mapped successfully",
            device : device
        }
        res.status(httpStatus.OK).send(message);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error +'' + error.message);
    }
};

module.exports = {
    createDevice,
    getAllDevices,
    getPorts,
    editDeviceById,
    getDeviceById,
    deleteDeviceById,
    mapDevice

};