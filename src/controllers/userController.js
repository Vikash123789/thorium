const res = require("express/lib/response");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    let savedData = await userModel.create(data);
    res.status(201).send({ msg: savedData });
  }
  catch (error) {
    res.status(500).send({ err: error.message })
  }
}

const loginUser = async function (req, res) {
  try {
    let username = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: username, password: password });
    if (!user)
      return res.status(400).send({
        status: false,
        msg: "Please Enter Valid Username or Password",
      });
    let token = jwt.sign({ userId: user._id.toString() }, "Facebook");

    res.status(201).send({ status: true, msg: "Succesfully LogedIn.Here is a access Token", token: token })//msg: token });
  }
  catch (err) {
    res.status(500).send({ err: err.message })
  }
}



const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;

    let user = await userModel.findById(userId);
    res.status(200).send({ status: true, msg: user });
  } catch (error) {
    res.status(500).send({ error: error.message })
  }

};






const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let data = req.body;
    let UpToDate = await userModel.findByIdAndUpdate(
      { _id: userId },
      { $set: data },
      { new: true }
    );
    res.status(200).send({ status: true, msg: "Updated Data" });
  }
  catch (error) {
    res.status(500).send({ error: error.message })

  };
}



const deleteData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let deletedData = await userModel.findByIdAndUpdate(

      { _id: userId },
      { $set: { isDeleted: true } },
      { new: true }
    );
    res.status(200).send({ status: true, msg: "User Deleted" });
  }
  catch (error) {
    res.status(500).send({ error: error.message })
  }
};

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteData = deleteData;
