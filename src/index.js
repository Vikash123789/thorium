const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const route = require("./routes/route.js")
const app = express();
const multer = require("multer")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(multer().any())

mongoose.connect("mongodb+srv://ManojKoli:ManojKoli@cluster0.kwqvp.mongodb.net/group30Database?authSource=admin&replicaSet=atlas-sncxo8-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",
{useNewUrlparser:true})
.then(()=>console.log("MongoDb is connected"))
.catch(err =>console.log(err))

app.use('/',route);

app.listen(process.env.PORT ||3000,function(){
    console.log("Express is running on port ",+(process.env.Port || 3000))

});