// const mongoose = require("mongoose");
// var studentdata=mongoose.model('studentdata');
const express = require("express");

const  student_Act = require("../controllers/students"); 

const router = express.Router();

router.get('/getAll/', student_Act.getStudents);
router.get('/:email', student_Act.getspecStudent);
router.post('/create', student_Act.createstudent);
router.put('/edit/:email', student_Act.updatestudent);
router.delete('/delete/:email', student_Act.deletestudent);




module.exports=router;