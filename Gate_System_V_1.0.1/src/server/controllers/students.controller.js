const httpStatus = require("http-status");
const { prisma } = require("../../../prisma/myClient");
// const prisma = new PrismaClient();

const{studentsModel} = require("../models");

const {SerialPort} = require("serialport")


let ConnectedPorts = [];
let serialHandler = null;
let CardData = ''
let CurrentPort = [];


// create student
const createStudent = async(req, res) => {
    console.log(req.body);
    try {
        const {student_id,name,email,phone,address,org_id} = req.body;
        // use joi to validate the request body
        const {error} = studentsModel.createStudentSchema.validate(req.body);
        if(error){
            res.status(httpStatus.BAD_REQUEST).send(error.details[0].message);
        }else{
            const student = await prisma.students.create({
                data : {
                    org_id: parseInt(req.body.org_id),
                    student_id: req.body.student_id,
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone,
                    address: req.body.address,
                    user_group_id:1,
                }
            });
            const message = {
                message: "Student created successfully",
                data: student,
            };
            res.status(httpStatus.OK).send(message);
        }
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error + " " + error.message);
    }
}

// get all student
const getAllStudent = async(req, res) => {
    try {
        const result = await prisma.students.findMany({
            include: {
                user_group: true,
                rfid_card: true,
                org: true,
            },
        });
        const trasformedResult = result.map((item) => {
            item.user_group_id  === null ? user_group_name = null : user_group_name = item.user_group.group_name;
            item.rfid_card_id === null ? rfid_card_name =null : rfid_card_name = item.rfid_card.card_no;
            return {
                id: item.id,
                org_id: item.org_id,
                student_id: item.student_id,
                name: item.name,
                email: item.email,
                phone: item.phone,
                address: item.address,
                barcode: item.barcode,
                isActive: item.isActive,
                user_group_id: item.user_group_id,
                rfid_card_id: item.rfid_card_id,
                org_name: item.org.name,
                user_group_name: user_group_name,
                rfid_card_name: rfid_card_name,
            };
        });

        res.status(httpStatus.OK).send(trasformedResult);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error + " " + error.message);
    }
}

// get student by id
const getStudentById = async(req, res) => {
    try {
        const result = await prisma.students.findUnique({
            where: {
                id: Number(req.params.id),
            },
        });
        if(!result){
            res.status(httpStatus.NOT_FOUND).send("Student not found");
        }else{
            res.status(httpStatus.OK).send(result);
        }
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error + " " + error.message);
    }
}

// edit student by id
const editStudentById = async(req, res) => {
    console.log(req.body)
    console.log(req.params.id)
    try {
        // use joi to validate the request body
        const {error} = studentsModel.updateStudentSchema.validate(req.body);
        if(error){
            res.status(httpStatus.BAD_REQUEST).send(error.details[0].message);
        }else{
            const result = await prisma.students.update({
                where: {
                    id: Number(req.params.id),
                },
                data: {
                    org_id: parseInt(req.body.org_id),
                    student_id: req.body.student_id,
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone,
                    address: req.body.address,
                    user_group_id: parseInt(req.body.user_group_id),
                    rfid_card_id: parseInt(req.body.rfid_card_id),
                    isActive: req.body.isActive,
                    updatedAt: new Date(),
                },
            });
            const message = {
                message: "Student updated successfully",
                data: result,
            };
            res.status(httpStatus.OK).send(message);
        }
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error + " " + error.message);
    }
}



// delete student by id
const deleteStudentById = async(req, res) => {
    try {
        const result = await prisma.students.delete({
            where: {
                id: Number(req.params.id),
            },
        });
        const message = {
            message: "Student deleted successfully",
            data: result,
        };
        res.status(httpStatus.OK).send(message);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error + " " + error.message);
    }
}

// reader service


SerialPort.list().then(ports => {
    let temp =[]
    ports.forEach(port => {
    temp.push(port)
    // console.log(port)
});
ConnectedPorts=temp
console.log(ConnectedPorts)
});


const issueCard = async(req, res) => {

    const {id} = req.params;
    console.log(id)
    try{
        const deviceTypes = await prisma.device_type.findMany({
            where : {
                operation : "ISSUE - READER"
            }
        });

       const devices_setup = await prisma.devices_setup.findMany({
            where : {
                // more than one device type can be setup for a single operation
                devicesType : {
                    in : deviceTypes.map(item => item.id)
                }
            },
            include : {
                device_type : true,
            }
       })
       if(devices_setup.length === 0){
              res.status(httpStatus.BAD_REQUEST).send("No device setup for this operation")
         }

        ConnectedPorts.forEach(port => {
            if(devices_setup.map(item => item.path).includes(port.path)){
                console.log(port.path,"connected")
                // console devices_setup path
                console.log(devices_setup.map(item => item.path))
                    const serialPort = new SerialPort({
                        path: port.path,
                        baudRate: 9600,
                        autoOpen: false,
                    }).setEncoding("utf8");
                    
                    serialPort.open((err) => {
                        if (err) {
                            return console.log("Error opening port: ", err.message);
                        }
                        console.log("Port opened");
                    });

                    serialPort.on("open", () => {
                        console.log("Port opened");

                    });

                    serialPort.on("readable", () => {
                        // console.log(data);
                        setTimeout(() => {
                            data = serialPort.read();
                        if(data){
                            let output = data
                                    .toString()
                                    .replace(/[\x02]/g, "")
                                    .toString()
                                    .replace(/[\x03]/g, "");
                        
                        // CardData = data.toString()
                        const rfidCard = prisma.rfid_card.create({
                            data: {
                                card_no: output,
                                description: output + " " + "card",
                                isActive: true,
                            },
                        }).then((data) => {
                            // console.log(data);
                            // res.status(httpStatus.OK).send(rfidCard)
                            setTimeout(() => {
                                const issueToStudent = prisma.students.update({
                                    where: {
                                      id: parseInt(id),
                                    },
                                    data: {
                                        user_group_id : 4,
                                        rfid_card_id: data.id,
                                        updatedAt: new Date(),
                                    },
                                  }).then((data) => {
                                        console.log(data)
                                        const message = {
                                            message: "Card issued successfully",
                                            data: data,
                                        };
                                        res.status(httpStatus.OK).send(message)
                                        setTimeout(() => {
                                            serialPort.close((err) => {
                                                if (err) {
                                                    return console.log("Error closing port: ", err.message);
                                                }
                                                console.log("Port closed");
                                            });
                                            
                                        serialPort.on("close", () => {
                                            console.log("Port closed");
                                        });
                                        }, 20);
                                        
                                    })
                                    serialPort.on("close", () => {
                                        console.log("Port closed");
                                    });
                            }, 20);

                        });  
                        }
                        serialPort.on("close", () => {
                            console.log("Port closed");
                        });
                        }, 50);
                        
                    });

                    serialPort.on("close", () => {
                        console.log("Port closed");
                    });

                    serialPort.on("error", (err) => {
                        console.log("Error: ", err.message);
                    });
                    serialPort.close((err) => {
                        if (err) {
                            return console.log("Error closing port: ", err.message);
                        }
                        console.log("Port closed");
                    });
            }

        });
    }
    catch(error){
        res.status(httpStatus.BAD_REQUEST).send(error + " " + error.message)
    }
}



module.exports = {
    createStudent,
    getAllStudent,
    getStudentById,
    editStudentById,
    deleteStudentById,
    issueCard,
    

}