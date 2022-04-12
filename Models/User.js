const mongoose = require("mongoose");
//create model of user
const useSchema = mongoose.Schema({
  userName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  age: {
    required: true,
    type: String,
  },
});
module.exports = mongoose.model("User", useSchema);
