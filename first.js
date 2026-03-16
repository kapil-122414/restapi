const express =require("express");
const app=express();
const port=9000;
const fs=require("fs");

app.get("/api/users",(req,res)=>{
    //  const read=fs.readFileSync("./MOCK_DATA (1).json",);
    //       const js=   JSON.parse(read)
          
    // res.send(js);
    res.sendFile('./index.html',
        {root:__dirname}
    );
})
app.listen(port,()=>{console.log(`sever run this port ${port}`)});