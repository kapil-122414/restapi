





 
console.log("hello");


   function submmit(){
        
   
let name=document.getElementById("username").value;
let age=document.getElementById("age").value;
let number=document.getElementById("number").value;
console.log(name);


 fetch('http://localhost:7000/api/senddata', {
   method: "POST",
   headers:{
     "Content-Type":"application/json"
   },
   body: JSON.stringify({
     name:name,
    age:age,
    Number:number,
   })
 })
 .then(res => res.json())
 .then(data =>{ 
    console.log(data);
alert("successfuly");
})
 
 
    
}





//show data
  
   async function show(){
    
   let  res=  await fetch('http://localhost:7000/api/submit')
      let getdata=  await res.json();
  
   //let string= JSON.stringify(getdata);
    let container= document.getElementById("data");
    container.innerHTML=" ";


    
    getdata.forEach(user => {

         container.innerHTML += `
         <table  style="border:2px solid black ">
         <tr style="border:2px solid black ">
         <td style="border:2px solid black ">${user.id} </td>
           <td style="border:2px solid black "> ${user.name}</td>
             <td style="border:2px solid black ">${user.age}</td>
               <td style="border:2px solid black ">${user.Number}</td>
                <td  style="border:2px solid black "> <button onclick= "edit(${user.id})">edit</button>  </td>
                <td  style="border:2px solid black "> <button onclick="deletes(${user.id})">delete</button>   </td>

              
         </tr>
         </table>
         
       
        
        `;
        

             });
    
    console.table(getdata);
   
}

//edit 
 async function edit(id){
  console.log(id);
   
let name=document.getElementById("username").value;
let age=document.getElementById("age").value;
let Number=document.getElementById("number").value;
  const res= await fetch(`http://localhost:7000/api/Edit/${id}`,{
    method:"put",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({name,age ,Number })
  })
  
    const data= await res.json();
    console.log(data);


 window.alert("edit", data)
}

//delete
   async function deletes(id){
 console.log(id);
 const res=await fetch(`http://localhost:7000/api/delete/${id}`,{
  method:"DELETE",
  headers:{
"content-type":"application/json"
  },
  body:JSON.stringify()

     
   })
       const data= await res.json()
       console.log(data)
       window.alert("delete data");
  }

