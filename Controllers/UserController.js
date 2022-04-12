const User = require("../Models/User");
const mongoose = require("mongoose");
const res = require("express/lib/response");
const postUser = async (req, res) => {
  const user = req.body;
  try {
    const searchedUser = await User.findOne({ email: user.email });
    if (searchedUser) {
      return res.status(401).json({ msg: "user is already exist" });
    }
    //instanciation
    const newUser = await new User({
      userName: user.userName,
      email: user.email,
      age: user.age,
    });
    await newUser.save();
    res.status(200).json({ msg: "sucessuffly saved", user: newUser });
  } catch (error) {
    res.status(400).json({ msg: "error" });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users: users });
  } catch (error) {
    res.status(400).json({ msg: "failed to get all users" });
  }
};
//to delete user first i need id from the params of the pats
const deletUser = async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    const users = await User.find();
    res.status(200).json({ msg: "deleted suecessfully", users: users });
  } catch (error) {
    res.status(400).json({ msg: "delete failed" });
  }
};
const modifyUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = req.body;
    await User.findByIdAndUpdate(id, user, { new: true });
    res.status(200).json({ msg: "user updated" });
  } catch (error) {
    res.status(400).json({ msg: "failed opreation" });
  }
};
const getOneUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(400).jon({ msg: "failed to get sepecefic user" });
  }
};
module.exports = { postUser, getAllUsers, deletUser, modifyUser, getOneUser };
