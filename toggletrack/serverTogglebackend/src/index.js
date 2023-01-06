const express = require('express')

const dotenv = require('dotenv')
let bodyParser = require('body-parser')
const cors=require('cors')
const DbConnect = require('./config/DbConnect')
const projectRouter = require('./router/project.router')
const tagRouter = require('./router/tag.router')
const clientRouter = require('./router/client.router')

let PORT =process.env.PORT || 8080
dotenv.config()
const app = express()
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(express.json())

app.get('/' , (req , res) => { return  res.send('Namshkar') })
app.use("/project",projectRouter)
app.use("/tag",tagRouter)
app.use("/client",clientRouter)

app.listen(PORT,  () => {
    DbConnect();
    console.log(`Live on http://localhost:PORT`) })