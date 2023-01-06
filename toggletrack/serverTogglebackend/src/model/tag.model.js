const mongoose=require("mongoose");

const tagSchema=new mongoose.Schema({
    tag:{type:String,required:true},
   

})


const tagModel=mongoose.model("tag",tagSchema);

module.exports=tagModel;