const express = require('express');
const router = express.Router();
const {studentsController} = require('../controllers/index');

router.post('/addStudent', studentsController.createStudent);
router.get('/getAllStudents', studentsController.getAllStudent);
router.get('/getStudentById/:id', studentsController.getStudentById);
router.put('/editStudentById/:id', studentsController.editStudentById);
router.delete('/deleteStudentById/:id', studentsController.deleteStudentById);
router.post('/issueCard/:id', studentsController.issueCard);

module.exports = router;