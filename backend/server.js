require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const app = express();
const MONGO_URI = process.env.MONGO_URI ;
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
mongoose.connect(MONGO_URI).then(() => console.log("MongoDB connected"));
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
    res.send("API running");
})
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
