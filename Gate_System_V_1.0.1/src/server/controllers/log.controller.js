const httpStatus = require("http-status");
const { prisma } = require("../../../prisma/myClient");
// const prisma = new PrismaClient();

const moment = require('moment');

// add log
const addLog = async (req, res) => {
  console.log(req.body);
  try {
    const {
      door_name,
      student_id,
      studentName,
      readerPort,
      devices_type_opration,
    } = req.body;

    const door = await prisma.doors.findFirst({
      where: {
        name: door_name,
      },
    });
    console.log(door, "door");

    const student = await prisma.students.findFirst({
      where: {
        id: student_id,
      },
      include: {
        org: true,
      },
    });
    console.log(student, "student");

    const devices_setup = await prisma.devices_setup.findFirst({
      where: {
        path: readerPort,
      },
    });
    console.log(devices_setup, "devices_setup");

    const inOutLog = await prisma.inout_log.create({
      data: {
        organization: student.org.name,
        org_id: student.org_id,
        devicePort: readerPort,
        device_id: devices_setup.id,
        doorNo: door_name,
        door_id: door.id,
        studentName: studentName,
        student_id: student.id,
        operation: devices_type_opration,
      },
    });

    res.status(httpStatus.OK).send(inOutLog);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send(error + " " + error.message);
  }
};

// get all logs
const getAllLogs = async (req, res) => {
  try {
    const logs = await prisma.inout_log.findMany({
      include: {
        org: true,
        door: true,
        students: true,
      },
    });
    const devices_setup = await prisma.devices_setup.findMany({
      where: {
        id: logs.device_id,
      },
      include: {
        device_type: true,
        door: true,
      },
    });

    const data = logs.map((log) => {
      return {
        id: log.id,
        organization: log.org.name,
        org_id: log.org_id,
        devicePort: log.devicePort,
        device_id: log.device_id,
        doorNo: log.door.name,
        door_id: log.door_id,
        studentName: log.students.name,
        student_id: log.student_id,
        operation: log.operation,
        createdAt: log.createdAt,
        org: log.org,
        door: log.door,
        students: log.students,
        devices_setup: devices_setup.filter(
          (device) => device.id === log.device_id
        ),
      };
    });

    res.status(httpStatus.OK).send(data);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send(error + " " + error.message);
  }
};




// const reportCalculation = async (req, res) => {
//   const { org_id, report_type, startDate, endDate } = req.body;
//   const reportTypes = {
//     1: 'day',
//     2: 'week',
//     3: 'month'
//   };
//   const dateFormat = 'M/D/YYYY';

//   try {
//     const logs = await prisma.inout_log.findMany({
//       where: {
//         org_id: parseInt(org_id),
//         log_date: {
//           gte: moment(startDate, dateFormat).toISOString(),
//           lte: moment(endDate, dateFormat).endOf(reportTypes[report_type]).toISOString()
//         },
//         operation: {
//           in: ['READ - IN', 'READ - OUT']
//         }
//       },
//       include: {
//         org: true,
//         door: true,
//         students: true,
//       },
//     });

//     const studentLogs = {};
//     logs.forEach(log => {
//       if (!studentLogs[log.students.id]) {
//         studentLogs[log.students.id] = {
//           id: log.students.id,
//           name: log.students.name,
//           logs: []
//         };
//       }
//       studentLogs[log.students.id].logs.push(log);
//     });

//     const report = Object.values(studentLogs).map(studentLog => {
//       const logs = studentLog.logs;
//       let totalHours = 0;
//       let startTime;
//       let endTime;
//       let lastOperation;

//       logs.forEach(log => {
//         if (log.operation === 'READ - IN') {
//           startTime = log.log_date;
//         } else {
//           endTime = log.log_date;
//           const duration = moment(endTime).diff(startTime, 'hours', true);
//           totalHours += duration;
//         }

//         lastOperation = log.operation;
//       });

//       if (lastOperation === 'READ - IN') {
//         const now = moment().toISOString();
//         const duration = moment(now).diff(startTime, 'hours', true);
//         totalHours += duration;
//       }

//       return {
//         student_id: studentLog.id,
//         name: studentLog.name,
//         total_hours: totalHours,
//         logs: logs
//       };
//     });

//     res.status(httpStatus.OK).send(report);
//   } catch (error) {
//     res.status(httpStatus.BAD_REQUEST).send(error + " " + error.message);
//   }
// };





// const reportCalculation = async (req, res) => {
//     const { org_id, report_type, startDate, endDate } = req.body;
//     const reportTypes = {
//       1: 'day',
//       2: 'week',
//       3: 'month'
//     };
//     const dateFormat = 'M/D/YYYY';
  
//     try {
//       let startISODate, endISODate;
  
//       // If start and end date are same, set start time to 00:00:00 and end time to 23:59:59
//       if (moment(startDate, dateFormat).isSame(moment(endDate, dateFormat))) {
//         startISODate = moment(startDate, dateFormat).startOf('day').toISOString();
//         endISODate = moment(endDate, dateFormat).endOf('day').toISOString();
//       } else {
//         startISODate = moment(startDate, dateFormat).toISOString();
//         endISODate = moment(endDate, dateFormat).endOf(reportTypes[report_type]).toISOString();
//       }
  
//       const logs = await prisma.inout_log.findMany({
//         where: {
//           org_id: parseInt(org_id),
//           log_date: {
//             gte: startISODate,
//             lte: endISODate
//           },
//           operation: {
//             in: ['READ - IN', 'READ - OUT']
//           }
//         },
//         include: {
//           org: true,
//           door: true,
//           students: true,
//         },
//       });
//       console.log(logs)
//       const studentLogs = {};
//       logs.forEach(log => {
//         if (!studentLogs[log.students.id]) {
//           studentLogs[log.students.id] = {
//             id: log.students.id,
//             name: log.students.name,
//             org: log.org.name,
//             student_id: log.student_id,
//             logs: []
//           };
//         }
//         studentLogs[log.students.id].logs.push(log);
//       });
  
//       const report = [];
  
//       for (let date = moment(startDate, dateFormat); date <= moment(endDate, dateFormat); date = date.clone().add(1, 'd')) {
//         const isoDate = date.toISOString();
  
//         const data = Object.values(studentLogs).map(studentLog => {
//           const logs = studentLog.logs.filter(log => moment(log.log_date).isSame(date, 'day'));
//           let totalHours = 0;
//           let startTime;
//           let endTime;
//           let lastOperation;
  
//           logs.forEach(log => {
//             if (log.operation === 'READ - IN') {
//               startTime = log.log_date;
//             } else {
//               endTime = log.log_date;
//               const duration = moment(endTime).diff(startTime, 'hours', true);
//               totalHours += duration;
//             }
  
//             lastOperation = log.operation;
//           });
  
//           if (lastOperation === 'READ - IN') {
//             const now = moment().toISOString();
//             const duration = moment(now).diff(startTime, 'hours', true);
//             totalHours += duration;
//           }
  
//           return {
//             student_id: studentLog.student_id,
//             name: studentLog.name,
//             organization: studentLog.org,
//             total_hours: totalHours.toFixed(2)
//           };
//         });
  
//         report.push({
//           date: date.format(dateFormat),
//           data
//         });
//       }
  
//       res.status(httpStatus.OK).send(report);
//     } catch (error) {
//       res.status(httpStatus.BAD_REQUEST).send(error + " " + error.message);
//     }
//   };
   





// const reportCalculation = async (req, res) => {
//   const { org_id, report_type, startDate, endDate } = req.body;
//   const reportTypes = {
//       1: 'day',
//       2: 'week',
//       3: 'month'
//   };
//   const dateFormat = 'M/D/YYYY';

//   try {
//       let startISODate, endISODate;

//       // If start and end date are same, set start time to 00:00:00 and end time to 23:59:59
//       if (moment(startDate, dateFormat).isSame(moment(endDate, dateFormat))) {
//           startISODate = moment(startDate, dateFormat).startOf('day').toISOString();
//           endISODate = moment(endDate, dateFormat).endOf('day').toISOString();
//       } else {
//           startISODate = moment(startDate, dateFormat).toISOString();
//           endISODate = moment(endDate, dateFormat).endOf(reportTypes[report_type]).toISOString();
//       }

//       const logs = await prisma.inout_log.findMany({
//           where: {
//               org_id: parseInt(org_id),
//               log_date: {
//                   gte: startISODate,
//                   lte: endISODate
//               },
//               operation: {
//                   in: ['READ - IN', 'READ - OUT']
//               }
//           },
//           include: {
//               org: true,
//               door: true,
//               students: true,
//           },
//       });

//       const studentLogs = {};
//       logs.forEach(log => {
//           if (!studentLogs[log.students.id]) {
//               studentLogs[log.students.id] = {
//                   id: log.students.id,
//                   name: log.students.name,
//                   org: log.org.name,
//                   student_id: log.student_id,
//                   logs: []
//               };
//           }
//           studentLogs[log.students.id].logs.push(log);
//       });

//       const report = [];

//       for (let date = moment(startDate, dateFormat); date <= moment(endDate, dateFormat); date = date.clone().add(1, 'd')) {
//           const isoDate = date.toISOString();

//           const data = Object.values(studentLogs).map(studentLog => {
//               const logs = studentLog.logs.filter(log => moment(log.log_date).isSame(date, 'day'));
//               let totalHours = 0;
//               let intime, outtime;

//               logs.forEach(log => {
//                   if (log.operation === 'READ - IN') {
//                       intime = log.log_date;
//                   } else {
//                       outtime = log.log_date;
//                       const duration = moment(outtime).diff(intime, 'hours', true);
//                       totalHours += duration;
//                   }
//               });

//               return {
//                   student_id: studentLog.student_id,
//                   name: studentLog.name,
//                   organization: studentLog.org,
//                   total_hours: totalHours.toFixed(2),
//                   intime: intime ? moment(intime).format('M/D/YYYY h:mm:ss A') : null,
//                   outtime: outtime ? moment(outtime).format('M/D/YYYY h:mm:ss A') : null
//               };
//           });

//           report.push({
//               date: date.format(dateFormat),
//               data
//           });
//       }

//       res.status(httpStatus.OK).send(report);
//   } catch (error) {
//       res.status(httpStatus.BAD_REQUEST).send(error + " " + error.message);
//   }
// };




const reportCalculation = async (req, res) => {
  const { org_id, report_type, startDate, endDate } = req.body;
  const reportTypes = {
      1: 'day',
      2: 'week',
      3: 'month'
  };
  const dateFormat = 'M/D/YYYY';

  try {
      let startISODate, endISODate;

      // If start and end date are same, set start time to 00:00:00 and end time to 23:59:59
      if (moment(startDate, dateFormat).isSame(moment(endDate, dateFormat))) {
          startISODate = moment(startDate, dateFormat).startOf('day').toISOString();
          endISODate = moment(endDate, dateFormat).endOf('day').toISOString();
      } else {
          startISODate = moment(startDate, dateFormat).toISOString();
          endISODate = moment(endDate, dateFormat).endOf(reportTypes[report_type]).toISOString();
      }

      const logs = await prisma.inout_log.findMany({
          where: {
              org_id: parseInt(org_id),
              log_date: {
                  gte: startISODate,
                  lte: endISODate
              },
              operation: {
                  in: ['READ - IN', 'READ - OUT']
              }
          },
          include: {
              org: true,
              door: true,
              students: true,
          },
      });

      const studentLogs = {};
      logs.forEach(log => {
          if (!studentLogs[log.students.id]) {
              studentLogs[log.students.id] = {
                  id: log.students.id,
                  name: log.students.name,
                  org: log.org.name,
                  student_id: log.student_id,
                  logs: []
              };
          }
          studentLogs[log.students.id].logs.push(log);
      });

      const report = [];

      for (let date = moment(startDate, dateFormat); date <= moment(endDate, dateFormat); date = date.clone().add(1, 'd')) {
          const isoDate = date.toISOString();

          const data = Object.values(studentLogs).map(studentLog => {
              const logs = studentLog.logs.filter(log => moment(log.log_date).isSame(date, 'day'));
              let totalHours = 0;
              let intime, outtime;

              logs.forEach(log => {
                  if (log.operation === 'READ - IN') {
                      if (!intime || moment(intime).isAfter(log.log_date)) {
                          intime = log.log_date;
                      }
                  } else {
                      if (!outtime || moment(outtime).isBefore(log.log_date)) {
                          outtime = log.log_date;
                      }
                  }
              });

              if (intime && outtime) {
                  const duration = moment(outtime).diff(moment(intime), 'hours', true);
                  totalHours = duration;
              }

              return {
                  student_id: studentLog.student_id,
                  name: studentLog.name,
                  organization: studentLog.org,
                  total_hours: totalHours.toFixed(2),
                  intime: intime ? moment(intime).format('DD/MM/YYYY h:mm:ss A') : null,
                  outtime: outtime ? moment(outtime).format('DD/MM/YYYY h:mm:ss A') : null
              };
          });

          report.push({
              date: date.format('DD/MM/YYYY'),
              data
          });
      }

      res.status(httpStatus.OK).send(report);
  } catch (error) {
      res.status(httpStatus.BAD_REQUEST).send(error + " " + error.message);
  }
};




     
  
  
  
  
  


module.exports = {
  addLog,
  getAllLogs,
  reportCalculation,
};
