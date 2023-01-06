const express=require("express");
const clientRouter=express.Router();
const  clientModel=require("../model/client.model");


clientRouter.get("/",async(req,res)=>{
    try {
        let client=await clientModel.find({})
        return res.send(client)
    } catch (error) {
        return res.send(error)
    }
})


clientRouter.post("/",async(req,res)=>{
    try {
        const {client}=req.body;
        let clie=new clientModel({client})
        clie=await clie.save();
        return res.send(clie)
    } catch (error) {
        return res.send(error)
    }
})

clientRouter.delete("/:id",async(req,res)=>{
    try {
        const {id}=req.params;
       clientModel.findByIdAndDelete(id,function(err,type){
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

module.exports=clientRouter