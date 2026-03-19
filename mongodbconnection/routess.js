const express=require("express");
const router =express.Router();
const  usermodel=require("./model_schema");


//crud operation 
//read //view
router.get('/users', async(req,res)=>{
   try{ const user= await usermodel.find();
    res.status(200).json(user);

   }
   catch(error){
    res.status(500).json({message:error.message});

   }
});

//post data
router.post("/users",async(req,res)=>{
    try{
        
    
        
        const Newuser= new usermodel(req.body);
         
        await Newuser.save();
     console.log(Newuser);
       res.json(Newuser);

    }
     catch(error){
    res.status(500).json("data post no in database");

   }
});













module.exports=router;

