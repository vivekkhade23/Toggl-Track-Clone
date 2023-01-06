const express=require("express");
const teamRouter=express.Router();
const  teamModel=require("../model/team.model");

teamRouter.get("/",async(req,res)=>{
    try {
        let client=await teamModel.find({})
        return res.send(client)
    } catch (error) {
        return res.send(error)
    }
})


teamRouter.post("/",async(req,res)=>{
    try {
        const {team}=req.body;
        let teams=new teamModel({team})
        teams=await teams.save();
        return res.send(teams)
    } catch (error) {
        return res.send(error)
    }
})

teamRouter.delete("/:id",async(req,res)=>{
    try {
        const {id}=req.params;
       teamModel.findByIdAndDelete(id,function(err,data){
if(err){
    console.log("there is a problem")
}else{
    console.log("it worked")
}
       })
        return res.send("deleted success")
    } catch (error) {
        return res.send(error)
    }
})

module.exports=teamRouter