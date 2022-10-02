// import mongoose from "mongoose";
// import cors from 'cors';
const cors = require('cors');
const express = require('express')
// import express from 'express';
const PORT = process.env.PORT || 5000;
// import DB from "../DB/DB.js";
const DB = require('./DB/DB')
const app = express();
// import postRouter from "../routes/post.js";
const postRouter = require('./routes/post')
DB();
// const CONNECTION_URL = 'mongodb+srv://<javascriptmystery>:<javascript123>@cluster0.dietyht.mongodb.net/?retryWrites=true&w=majority';
// const PORT = process.env.PORT || 5000;
// mongoose.connect(CONNECTION_URL, (req,res)=>{
// try{
// console.log("Connected Successfully!")
// }catch(err){
//     console.log("Connection Failed Description:", err)
// }
// })
app.use(cors());
// routes deine
app.use('/posts', postRouter)


//routes end

app.listen(PORT, ()=>{
    console.log(`server running on port number: ${PORT}`)
})