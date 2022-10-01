const express=require("express")
const dbConnect=require("./config/db")
const cors=require("cors")
const projectRouter=require("./features/project/project.router")

const cookieParser = require('cookie-parser');
const userroute = require("./features/users/users.router");

const PORT = process.env.PORT || 8000;
const app=express()
app.use(express.json())
app.use(cors())
app.use(cookieParser());

app.use("/project",projectRouter)
app.use("/users",userroute);
app.listen(PORT,async ()=>{
    await dbConnect()
     console.log(`Listening at port no. ${PORT}`)
 })    