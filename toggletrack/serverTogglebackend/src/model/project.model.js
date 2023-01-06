const mongoose=require("mongoose");

const projectSchema=new mongoose.Schema({
    name:{type:String,required:true},
    client:{type:String,required:true},
    private:{type:Boolean,required:true},
    team:{type:String,required:true},
    isArchieved:{type:Boolean,required:true},

})


const projectModel=mongoose.model("project",projectSchema);

module.exports=projectModel;