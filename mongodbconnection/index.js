const express=require("express");
const app =express();
const connectDB=require('./db.js');
const Port=6000;
//import the routess
const routess=require('./routess.js');


//in bulid in middleware

//connected data base in another file


connectDB();
//uses the routes
app.use(routess);
app.use(express.json());
//form data (HTML form) read karne ke liye
app.use(express.urlencoded({ extended: true }));

//connection of database
     




app.use('/api',routess);



app.get('/user',(req,res)=>{
    console.log(req.body);
    console.log("hello");
    res.json("hello world");
})


app.listen(Port,()=>
    console.log(`sever run this ${Port}`));