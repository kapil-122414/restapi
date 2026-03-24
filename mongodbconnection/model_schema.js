const {Schema,model}=require('mongoose');

const userschema=new Schema({
    name:{
        type:String,
        required:true
        
    },
    age:{
        type:Number,
        required:true
        
    },

     weight:{
    type:Number
         // duplicate allow nahi
  },

 userid:{
    type:Number
 },

    createAt:{
        type:Date,
        default:Date.now
    }
},
{
    collection:"product"
}


);

const usermodel=model("user",userschema);
module.exports=usermodel;