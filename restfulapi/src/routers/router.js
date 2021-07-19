const express = require('express');
const router = new express.Router();
const Student = require("../models/signup")

// create a new student 

//USING SYNC FUNCTION
// app.post("/students",(req, res)=>{
//     console.log(req.body)
//     const user= new Student(req.body);
  

//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })

//USING ASYNC FUNCTION
router.post("/students", async(req, res)=>{
    try{
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);

    }catch(e){
        res.status(400).send(e);
    } 
    
})

//read the data of registered student

router.get("/students",async(req,res)=>{
    try{
        const studentsData = await Student.find();
        res.send(studentsData);
    }catch(e){
        res.send(e);
    }
})

//get individual student data using id
router.get("/students/:name",async(req,res)=>{
    try{
        const name = req.params.name;
        const studentData=await Student.findOne({name});
        if(!studentData){
            return res.status(404).send();
        }else{
        res.send(studentData);
       
        }
    }catch(e){
        res.status(500).send(e);
    }
})

//performing PATCH request
router.patch("/students/:phone",async (req,res)=>{
    try{
        const phone = req.params.phone;
        const updateStudent = await Student.findOneAndUpdate({phone}, req.body,{
            new:true
        });
        res.send(updateStudent);
    }catch(e){
        res.status(404).send(e);
    }
})

// delete the student's data by id
router.delete("/students/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        const deleteData = await Student.findByIdAndDelete(_id);
        if(!_id){
            return res.status(404).send();
        }else{
        res.send(deleteData);
        }
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports = router;