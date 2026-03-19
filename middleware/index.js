const express=require("express");
const app =express();
const Port=6000;
//load moddleware in app
//in bulid in middleware

app.use(express.json());
//form data (HTML form) read karne ke liye
app.use(express.urlencoded({ extended: true }));

//create middleware -logging ,auth,validation
        const logging=function (req,res,next){
    console.log("login middelware");
    req.user({"name":"kapil",
        "role":"student"
    })
    if(req.user){
        console.log("valide user")
        next();
    }
    else(
        res.json({
          "success":false
        })
    )
    
}

const student=function(res,req,next){

    console.log(" ya auth authorize h");
    if(req.usr.role==="student"){
       
       next();
    }
    else{
        res.json({
            "succes":false,
            "message":"you not student"
        })
    }


}

const admin=function(res,req,next){
    console.log("you are adim");
    if(req.user.role==="admin"){
        next();
    }
    else{
        res.json({
            "success":false,
            "message":""
        })
    }
    
}
app.use(validation);



app.get('/user',(req,res)=>{
    console.log(req.body);
    console.log("hello");
    res.json("hello world");
})


app.listen(Port,()=>
    console.log(`sever run this ${Port}`));