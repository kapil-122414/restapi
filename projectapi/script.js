





 
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







   async function show(){
    
   let  res=  await fetch('http://localhost:7000/api/submit')
      let getdata=  await res.json();
  
   //let string= JSON.stringify(getdata);
    let container= document.getElementById("data");
    container.innerHTML=" ";


    
    getdata.forEach(user => {

         container.innerHTML += `
         <table >
         <tr>
         <td>${user.id} </td>
           <td> ${user.name}</td>
             <td>${user.age}</td>
               <td>${user.number}</td>
         </tr>
         </table>
         
       
        
        `;
        

             });
    
    console.table(getdata);
   
}