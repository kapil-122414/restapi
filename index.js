const express =require("express")
const app=express();
const port=9000;
app.use(express.json());
const fs=require('fs');
const { json } = require("stream/consumers");
app.use(express.urlencoded({extended:false}));


//get data 




app.get('/api/users',(req,res)=>{
    const readFile=fs.readFileSync('./MOCK_DATA (1).json');
const user=JSON.parse(readFile)
    return res.json(user);
})

// get the value as id


app.get('/api/users/:id',(req,res)=>{
  const user=JSON.parse(fs.readFileSync('./MOCK_DATA (1).json'));
  const Id=Number(req.params.id);
  
      const finde= user.find((user)=>user.id===Id);
      
 if(!finde){
    return res.json(" not found")
 }
   else{  return res.json(finde);}
  

})

//post api
app.post('/api/users',(req,res)=>{

    const data=JSON.parse(fs.readFileSync('./MOCK_DATA (1).json','utf-8'))
    const body=req.body;

        const user={
         "id":data.length+1,
        ...body
       
     };

      data.push(user);
    //  console.log(news);
     const newUser=JSON.stringify(data);
     fs.writeFileSync('./MOCK_DATA (1).json',newUser)
     res.json("successfuly");
   

})

//delete
app.delete('/api/users/:id',(req,res)=>{

    const user=JSON.parse(fs.readFileSync('./MOCK_DATA (1).json','utf-8'));
    const Id=Number(req.params.id);
    
    const delet=user.filter((user)=>user.id!=Id);
 fs.writeFileSync('./MOCK_DATA (1).json',JSON.stringify(delet));
    res.json("success");
})

//put method 

app.put('/api/users/:id',(req,res)=>{
    const user=JSON.parse(fs.readFileSync('./MOCK_DATA (1).json','utf-8'));
      const id=Number(req.params.id);
      const body=req.body;
    //   console.log(id);
    //   console.log(body);
    const  index=user.findIndex((user)=> user.id === id);
     user[index] = { id, ...body };
// console.log(data);
fs.writeFileSync('./MOCK_DATA (1).json',JSON.stringify( user ))
 res.json( user[index] )
    
});




app.listen(port,()=>{console.log(`server start at port ${port}`)});