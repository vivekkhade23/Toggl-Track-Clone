const express=require('express');
const Project=require("./project.model")
const {request,respone}=require('express')

const app=express.Router()

app.get("/",async (req,res)=>{
    try{
        let item=await Project.find({});
        res.send(item)
    }catch(e){
        res.status(500).send(e.message)

    }
})
app.post("/",async (req,res)=>{
    try{
        let item=await Project.create(req.body);
        res.send(item)
    }catch(e){
        res.status(500).send(e.message)

    }
})

module.exports=app
