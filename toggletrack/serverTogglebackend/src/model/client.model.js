const mongoose=require("mongoose");

const clientSchema=new mongoose.Schema({
    client:{type:String,required:true},
   

})


const clientModel=mongoose.model("client",clientSchema);

module.exports=clientModel;