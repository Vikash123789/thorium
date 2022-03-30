
const userModel = require("../models/userModel.js")
const jwt = require("jsonwebtoken")
const validation = require("../middleware/validation")



const registerUser = async (req, res) => {
    try {
        let data = req.body;
        if (Object.keys(data).length == 0) {
            return res.status(400).send({ status: false, msg: "No input" })
        }
        const { title, name, phone, email, password } = data;
        if (!validation.valid(title)) { return res.status(400).send({ status: false, msg: "imput title" }) }
       if(title != "Mr"&&"Misses"&&"Miss"){return res.status(400).send({Satus:false , msg:"Title can only be Mr , Misses and Miss" })}
        if (!validation.valid(name)) { return res.status(400).send({ status: false, msg: "input name" }) }
        if (!validation.valid(phone)) { return res.status(400).send({ status: false, msg: "input phone" }) }
        if (!validation.isValidPhone(phone)) {
            return res.status(400).send({ status: false, message: "Enter valid 10 digit indian mobile number " });
        }

        const phoneExt = await userModel.findOne({ phone: data.phone })
        if (phoneExt) { return res.status(400).send({ msg: "phone allready exists" }) }

        
        if (!validation.valid(email)) { return res.status(400).send({ status: false, msg: "input email" }) }
        if (! validation.isValidEmail(email)) {
            return res.status(400).send({ status: false, message: "Enter  valid email address " });
        }
        const emailExt = await userModel.findOne({ email: data.email })
        if (emailExt) { return res.status(400).send({ msg: " Email already exists " }) }

        if (!validation.valid(password)) 
        { return res.status(400).send({ status: false, msg: "input password" }) }
               if (password.length < 5 || password.length > 15) { return res.status(400).send({ msg: "Password minimum length is 5 and maximum length is 15" }) }
       

        let saveData = await userModel.create(data);
        return res.status(201).send({ status: true, msg: saveData })
    }
    catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, msg: error });
    }
}


const loginUser = async (req, res) => {
    try {
        Data = req.body

        if (Object.keys(Data).length == 0) { return res.status(400).send({ status: false, msg: "Please provide the input" }) }
        const { email, password } = Data;


        if (!validation.valid(email)) { return res.status(400).send({ status: false, msg: "Insert email" }) }
        if (! validation.isValidEmail(email)) {
            return res.status(400).send({ status: false, message: "Enter  valid email address " });
        }
        if (!validation.valid(password)) { return res.status(400).send({ status: false, msg: "Insert Password" }) }

        const findUser = await userModel.findOne({ email: email, password: password })
        if (!findUser) { return res.status(404).send({ status: false, msg: "No user found" }) }

        const token = jwt.sign({
            userId: findUser._id,

        }, "Project-Three", { expiresIn: "24h" }

        );
        
        return res.status(200).send({ status: true, msg: "Successful Login", Token:token })
    }
    catch (err) {
        console.log(err)
        return res.status(500).send({ status: false, msg: err })
    }
}



module.exports.loginUser = loginUser
module.exports.registerUser = registerUser