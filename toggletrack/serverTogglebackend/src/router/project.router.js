const express=require("express");
const projectRouter=express.Router();
const  projectModel=require("../model/project.model");

projectRouter.get("/",async(req,res)=>{
   try {
    let projs=await projectModel.find({});
    return res.send(projs)
    
   } catch (error) {
    return res.send("failed")
   }
})


projectRouter.post("/create",async(req,res)=>{
    try {
        const{name,client,private,team,}=req.body;
      let pro=new projectModel({name,client,private,team,isArchieved:false})
        pro=await pro.save();
      return  res.send("project created")
    } catch (error) {
       return res.send("failed")
    }
})

projectRouter.put("/updatearchieve/:id",(req,res)=>{
    try {
        const {id}=req.params;
        const {isArchieved}=req.body;
        console.log(id)
     projectModel.findByIdAndUpdate(id,{isArchieved:isArchieved},function(err,data){
        if(err){
            console.log("there is an error")
        }else{
            console.log("it worked")
        }
    })
      return  res.send("project Archieved")
    } catch (error) {
       return res.send(error)
    }
})
projectRouter.put("/update/:id",(req,res)=>{
    try {
        const {id}=req.params;
        const {name,client,private,team}=req.body;
        console.log(id)
     projectModel.findByIdAndUpdate(id,{name:name,client:client,private:private,team:team},function(err,data){
        if(err){
            console.log("there is an error")
        }else{
            console.log("it worked")
        }
    })
      return  res.send("project Archieved")
    } catch (error) {
       return res.send(error)
    }
})

projectRouter.get("/client/:client",async(req,res)=>{
    try {
        const {client}=req.params;
     let projs=await projectModel.find({client:client});
     return res.send(projs)
     
    } catch (error) {
     return res.send("failed")
    }
 })

 projectRouter.get("/team/:team",async(req,res)=>{
    try {
        const {team}=req.params;
     let projs=await projectModel.find({team:team});
     return res.send(projs)
     
    } catch (error) {
     return res.send("failed")
    }
 })


 projectRouter.get("/name/:name",async(req,res)=>{
    try {
        const {name}=req.params;
     let projs=await projectModel.find({name:name});
     return res.send(projs)
     
    } catch (error) {
     return res.send("failed")
    }
 })

 projectRouter.get("/archieved",async(req,res)=>{
    try {
        
     let projs=await projectModel.find({isArchieved:true});
     return res.send(projs)
     
    } catch (error) {
     return res.send("failed")
    }
 })
 projectRouter.get("/unarchieved/",async(req,res)=>{
    try {
       
     let projs=await projectModel.find({isArchieved:false});
     return res.send(projs)
     
    } catch (error) {
     return res.send("failed")
    }
 })

 projectRouter.delete("/delete/:id",(req,res)=>{
    try {
        const {id}=req.params;
        projectModel.findByIdAndDelete(id,function(err,data){
            if(err){
                console.log("there is an error");
            }else{
                console.log("it worked");
            }
        })
        return res.send("project deleted successfully")
    } catch (error) {
    return res.send(error)
    }
 })



module.exports=projectRouter;