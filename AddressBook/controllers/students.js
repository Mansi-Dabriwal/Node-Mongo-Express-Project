const express= require('express');
const mongoose= require('mongoose');
const bcrypt = require('bcrypt');
const { findOne } = require('../models/studentdata.js');

const Student= require('../models/studentdata.js');

const router= express.Router();

// router.post('/login', async function(req,res){ 
const loginstudent = async function(req,res){
    console.log("In login");
    var email = req.body.email;
    var password = req.body.password;

    Student.findOne({email:email},(err,user)=>{
        if(user){
            // if(passwor === user.password){
            // if(bcrypt.compare(password,user.password)){
                bcrypt.compare(password,user.password).then(isMatch =>{
                    if(isMatch){
                        res.send({message:"login success", exist:true})
                    }else{
                        res.send({message:"wrong credentials", exist: false})
                    }
                    

                })
        }else{
            res.send({message:"not registered"})
        }
    })

};

const getStudents = async (req, res) => {
    try {
        const student= await Student.find();
        
        res.status(200).json(student);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getspecStudent = async (req,res) => {
    const email = req.params.email;

    try {
        const stud = await Student.findOne({email: email});

        res.status(200).json(stud);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}



const createstudent =  async (req, res) => {
    console.log("heyyy");
    console.log(req.body);
    

    let passwordRegEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let nameRegex = /^[a-zA-Z]+$/;
    let mailRegEx = /^[A-Za-z][A-Za-z0-9._%+-]{0,63}@northeastern.edu$/;
    const stud =  await Student.findOne({email:req.body.email});
    console.log(stud);

    if (!req.body.full_name || !req.body.email || !req.body.password) {
        res.status(500).json({ code: 500, message: 'Full Name, Password and E-mail are required to create a User!' })
    }
    else if (!req.body.full_name.match(nameRegex)) {

        res.status(500).json({ code: 500, message: 'Full name should only contain alphabets' })
    }
    else if (!req.body.email.match(mailRegEx)) {
        console.log("checking password");
        res.status(500).json({ code: 500, message: 'E-mail should be of format yourmail@northeastern.edu' })
    }
    else if(stud){
        res.status(500).json({ code: 500, message: 'E-mail already exist' })
    }
    else if (!req.body.password.match(passwordRegEx)) {

        res.status(500).json({ code: 500, message: 'Password should be strong. Password should be between 6-16 characters long, and contain atleast one alphabet, one digit and one special character!' })
    }
    else {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        console.log(hashedPassword);
        const newstudent = new Student({
            full_name:req.body.full_name,
            email:req.body.email,
            password:hashedPassword,
            // password:req.body.password,
    
        });
        newstudent.save((err, data) => {
            if (!err) {
                console.log("User created");
                res.status(200).json({ code: 200, message: 'User Created!', createdUser: data })
            } else {
                console.log(err);
            }
        });
    }
}

const updatestudent = async (req, res) => {
    const email= req.params.email;

    let nameRegex = /^[a-zA-Z]+$/;
    if (!req.body.full_name || !req.body.password) {
        res.status(500).json({ code: 500, message: 'Full Name, Password and E-mail are required to create a User!' })
    }
    else if (!req.body.full_name.match(nameRegex)) {

        res.status(500).json({ code: 500, message: 'Full name should only contain alphabets' })
    }
    else{
        try{
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
            console.log(hashedPassword);
            await Student.findOneAndUpdate({
                email: email,
            },
            {   
                full_name:req.body.full_name,
                password:hashedPassword,
                
            }
            )
            res.status(202).json({email: email});
            console.log("Updated");
    
        } catch (error) {
            res.status(401).json({message: error.message});
        }
    }   
}

const deletestudent = async (req, res) => {
    const email= req.params.email;

    try {
        await Student.findOneAndRemove({email: email});
        console.log("Deleted");
        res.status(203).json({email:email});

    }catch(error) {
        res.status(402).json({message: error.message});
    }
}

module.exports.getStudents= getStudents;
module.exports.createstudent= createstudent;
module.exports.getspecStudent= getspecStudent;
module.exports.updatestudent= updatestudent;
module.exports.deletestudent= deletestudent;
module.exports.loginstudent = loginstudent;

// router.post('/user/create', (req, res) => {

//     let nameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
//     let mailRegEx = /^[A-Za-z][A-Za-z0-9._%+-]{0,63}@northeastern.edu$/;
//     let passwordRegEx = new RegExp('(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[^A-Za-z0-9])(?=.{8,})');
//     if (!req.body.fullName || !req.body.email || !req.body.password) {
//         res.status(500).json({ code: 500, message: 'Full Name, Password and E-mail are required to create a User!' })
//     }
//     else if (!req.body.fullName.match(nameRegex)) {

//         res.status(500).json({ code: 500, message: 'Full Name contains only alphabets and spaces!' })
//     }
//     else if (!req.body.email.match(mailRegEx)) {

//         res.status(500).json({ code: 500, message: 'E-mail should be of format yourmail@northeastern.edu' })
//     }
//     else if (!req.body.password.match(passwordRegEx)) {

//         res.status(500).json({ code: 500, message: 'Password should be strong. Password should atleast be 8 characters long, and contain atleast one upper case letter, one lower case letter, one digit and one special character!' })
//     }
//     else {
//         const userData = new User({
//             fullName: req.body.fullName,
//             email: req.body.email,
//             password: req.body.password
//         });
//         userData.save((err, data) => {
//             if (!err) {

//                 res.status(200).json({ code: 200, message: 'User Created!', createdUser: data })
//             } else {
//                 console.log(err);
//             }
//         });
//     }
// });