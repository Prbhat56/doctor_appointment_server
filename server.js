const express = require('express')
const colors =require('colors')
const morgan =require('morgan')
const dotenv = require('dotenv')
const cors = require("cors");
const connectDB = require('./config/db')
const { application } = require('express')
dotenv.config()
connectDB()
const app = express()
app.use(express.json());
app.use(cors({
    origin:true,
    origin:["https://doctor-appointment-client-theta.vercel.app"],
    credentials:true
}));
app.use(morgan('dev'))
app.use("/api/v1/user",require("./routes/userRoutes"))
app.use("/api/v1/admin",require("./routes/adminRoutes"))
 app.use("/api/v1/doctor",require("./routes/doctorRoutes"))
const port =process.env.PORT || 8000
app.listen(port ,()=>{
    console.log(`server in ${port} in ${process.env.DEV_MODE}`)
})