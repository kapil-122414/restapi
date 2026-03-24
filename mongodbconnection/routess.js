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
       const users = await usermodel.find();
               const newUserId = users.length + 1;
        
    const Newuser= new usermodel({...req.body,
      "userid":newUserId
   
    });
         
        await Newuser.save();
     console.log(Newuser);
       res.json(Newuser);

    }
     catch(error){
    res.status(500).json("data post no in database");

   }
});

//update
router.put('/users/:_id',async(req,res)=>{
   try{  
       const id=req.params._id;
        const data=req.body;
        console.log(id);
       
      const update= await usermodel.findOneAndUpdate({"_id":id},data,
         {returnDocument:'after'}
   )
  console.log(update);
   if(!update){
   return res.status(404).json("user not fount ");
   }

   res.status(200).json("succesfult");
}
catch(error){
    res.status(500).json("not update data");

   }
   

})

//delete

router.delete('/users/:_id', async(req,res)=>{
   const id=req.params._id;
   
   try{
   const deletedata=await usermodel.findOneAndDelete({'_id':id});
     console.log(deletedata);
     if(!deletedata){
       res.status(404).json("user not found");
     }
     res.status(200).json("successfuly delete data");
   
   }
   catch(error){
      res.status(500).json("not work delect api");
   }
 


})
//update only one value
router.patch('/users/:_id', async(req,res)=>{
   const id=req.params._id;
   const data=req.body;
   console.log(id);
   try{
      const onlyoneupdate= await usermodel.findOneAndUpdate({'_id':id},
         data,
         {returnDocument:"after"}
      );
      if(!onlyoneupdate){
        return  res.status(404).json("user not found");
      }
      res.status(200).json("update data");

   }
   catch(error){
      res.status(500).json("server not run");
   }


})












module.exports=router;

