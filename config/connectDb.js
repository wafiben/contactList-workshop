const mongoose = require("mongoose");
//this method is  to our server to mongodb and it is asyncrone
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("connected sucessfully to database");
  } catch (error) {
    console.log("failed connection to database");
  }
};
module.exports = connectDb;
