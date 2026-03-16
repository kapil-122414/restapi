const express=require ("express");
const app=express();
const port=7000;
app.use(express.json());
const fs=require('fs');
//const { json } = require("stream/consumers");
app.use(express.urlencoded({extended:false}));

const cors = require("cors");
app.use(cors());



app.get("/api/submit",(req,res)=>{
    const use =fs.readFileSync('./data.json','utf-8');
    const data=JSON.parse(use);

    res.json(data);
})

app.post("/api/senddata",(req,res)=>{
        const data=JSON.parse(fs.readFileSync('./data.json','utf-8'))
    const body=req.body;
    
    
            const user={
             "id":data.length+1,
            ...body
           
         };
    
          data.push(user);
        //  console.log(news);
         const newUser=JSON.stringify(data);
         fs.writeFileSync('./data.json',newUser)
         res.json("successfuly");
})

app.listen(port,()=>{
    console.log(`server this start this ${port}`);
})