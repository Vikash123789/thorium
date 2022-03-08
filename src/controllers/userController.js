const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let username = req.body.emailId;
  let password = req.body.password;
  let user = await userModel.findOne({ emailId: username, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "Please Enter Valid Username or Password",
    });
  let token = jwt.sign({ userId: user._id.toString() }, "Facebook");
  res.send({ status: true, msg: token });
};

const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  res.send({ status: true, msg: user });
};

const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let data = req.body;
  let UpToDate = await userModel.findByIdAndUpdate(

    { _id: userId },
    { $set: data },
    { new: true }
  );
  res.send({ status: true, msg: "Updated Data" });
};

const deleteData = async function (req, res) {
  let userId = req.params.userId;
  let deletedData = await userModel.findByIdAndUpdate(
    { _id: userId },
    { $set: { isDeleted: true } },
    { new: true }
  );
  res.send({ status: true, msg: "User Deleted"});
};

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteData = deleteData;
