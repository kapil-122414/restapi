//add mongoose libary
const mongoose = require('mongoose');



const connectDB=async()=>{
    try{
        const conn= await mongoose.connect(`mongodb://localhost:27017/ecommmerce`);
         
        console.log(`MongoDB connected:`);
    }
    catch(error){
        console.error("no error",error.message);
        
       
    };
};

    module.exports =connectDB;