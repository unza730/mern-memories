// import mongoose from "mongoose";
const mongoose = require('mongoose');
const DB = () => {
    const CONNECTION_URL = 'mongodb+srv://<javascriptmystery>:<javascript123>@cluster0.dietyht.mongodb.net/?retryWrites=true&w=majority';
    
    mongoose.connect(CONNECTION_URL, (req,res)=>{
    try{
    console.log("Connected Successfully!")
    }catch(err){
        console.log("Connection Failed Description:", err)
    }
    })
}

module.exports = DB;