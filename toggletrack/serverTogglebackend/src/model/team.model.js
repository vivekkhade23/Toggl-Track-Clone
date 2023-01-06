const mongoose=require("mongoose");

const teamSchema=new mongoose.Schema({
    team:{type:String,required:true},
   

})


const teamModel=mongoose.model("team",teamSchema);

module.exports=teamModel;