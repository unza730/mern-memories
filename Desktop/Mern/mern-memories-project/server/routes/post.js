// import express from "express";
const express = require('express')
const postRouter = express.Router();

postRouter.get('/', (req,res)=>{
    res.send('THIS WORK');
});
module.exports.postRouter = postRouter;
// export default postRouter;