const express=require("express");
const tagRouter=express.Router();
const  tagModel=require("../model/tag.model");

tagRouter.get("/",async(req,res)=>{
    try {
        let client=await tagModel.find({})
        return res.send(client)
    } catch (error) {
        return res.send(error)
    }
})


tagRouter.post("/",async(req,res)=>{
    try {
        const {tag}=req.body;
        let tags=new tagModel({tag})
        tags=await tags.save();
        return res.send(tags)
    } catch (error) {
        return res.send(error)
    }
})

tagRouter.delete("/:id",async(req,res)=>{
    try {
        const {id}=req.params;
       tagModel.findByIdAndDelete(id,function(err,data){
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

module.exports=tagRouter