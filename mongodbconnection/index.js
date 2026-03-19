const express=require("express");
const app =express();
const Port=6000;
//load moddleware in app
//in bulid in middleware
//add mongoose libary
const mongoose = require('mongoose');
app.use(express.json());
//form data (HTML form) read karne ke liye
app.use(express.urlencoded({ extended: true }));

//connection of database
     
const connectDB=async()=>{
    try{
        const conn= await mongoose.connect(`mongodb://localhost:27017/test`,{useNewUrlParser:true, });
         
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }
    catch(error){
        console.error("Db error",error.message);
       
    };
};

connectDB();







app.get('/user',(req,res)=>{
    console.log(req.body);
    console.log("hello");
    res.json("hello world");
})


app.listen(Port,()=>
    console.log(`sever run this ${Port}`));