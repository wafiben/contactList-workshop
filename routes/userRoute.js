const express = require("express");
const router = express.Router();
const {
  postUser,
  getAllUsers,
  deletUser,
  modifyUser,
  getOneUser
} = require("../Controllers/UserController");
router.get("/user", getAllUsers);
router.post("/user", postUser);
router.delete("/user/:id", deletUser);
router.put("/user/:id", modifyUser);
router.get("/user/:id", getOneUser);

module.exports = router;
