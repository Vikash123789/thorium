const mongoose = require("mongoose")
const userModel = require("../models/userModel.js")
const jwt =  require("jsonwebtoken")

const valid = function (input){
    if (typeof (input)===  undefined|| typeof(input) ===null){return false}
    if(typeof (input)==="string" && (input).trim().length>0) {return true}
}


const registerUser= async (req,res)=>{
    try{ let data = req.body;
        if(Object.keys(data)==0){
            return res.status(400).send({status:false, msg:"No input"})}
            const {title,name,phone,email,password}=data;
            if(!valid(title)){ return res.status(400).send({ status:false,msg:"imput title"})}
            if(!valid(name)){ return res.status(400).send({ status:false,msg:"input name"})}
            if(!valid(phone)){ return res.status(400).send({ status:false,msg:"input phone"})}
            if(!valid(email)){ return res.status(400).send({ status:false,msg:"input email"})}
            if(!valid(password)){ return res.status(400).send({ status:false,msg:"input password"})}

            const emailExt = await userModel.findOne({email :data.email})
            if(emailExt){ return res.status(400).send({msg :"already exist email"})}

            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
              return res.status(404).send({ status: false, message: "Enter  valid email address " });}

              if (!/^(\()?\d{3}(\))?(|\s)?\d{3}(|\s)\d{4}$/.test(phone)) {
              return res.status(404).send({ status: false, message: "Enter  valid mobile number " });}

            const phoneExt = await userModel.findOne({phone:data.phone})
            if(phoneExt) {return res.status(400).send({msg:"phone exist"})}

            if(password.length<5 ||password.length>15){return res.status(400).send({msg:"Password minimum length is 5 and maximum length is 15"})}
           // if(password.length>15){return res.status(400).send({msg:"Enter less than 5 character"})}




            let saveData = await userModel.create(data);
            return res.status(201).send({status:true,msg:saveData})
            

    }
    catch(error){ 
        console.log(error)
        return res.status(500).send({status:false,msg:error});


    }
}
module.exports.registerUser = registerUser