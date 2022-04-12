const express = require("express");
const connect = require("./config/connectDb");
require("dotenv").config({ path: "./config/.env" });
const userRoute=require('./routes/userRoute')
const app = express();
const cors=require('cors')
// assure la connexion entre le front et le back
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
//running the server
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
//connect to database 
connect();
//midelware
app.use(express.json())
app.use('/',userRoute)


