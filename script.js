fetch("data.json")
.then(function(response){
   return response.json();
})
.then(function(data){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let item of data){
      out += `
         <tr>
             <td>${item.id}</td>
            <td> 
            <img src='${item.img}'>
            ${item.first_name}
            ${item.last_name} 
            </td>
            <td>${item.gender}</td>
            <td>${item.class}</td>
            <td>${item.marks}</td>
            <td>${item.passing ? "pass" : "fail"}</td>
            <td>${item.email}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});

let searchItem=document.getElementById("src1");
let searchBtn=document.getElementById("src2");
let sortInc=document.getElementsById("bt1");
let sortDec=document.getElementsByClassName("btn2");
let sortMarks=document.getElementsByClassName("btn3");
let sortPass=document.getElementsByClassName("btn4");
let sortCls=document.getElementsByClassName("btn5");
let sortGndr=document.getElementsByClassName("btn6");

sortInc.addEventListener("click", sortatoz);
sortMarks.addEventListener("click", sortmk);

function sortatoz(){
    let atozData=data.sort((a,b)=>{
        if(a.first_name < b.first_name) return -1;
        else if(a.first_name > b.first_name) return 1;
        else return 0;
    })
    data(atozData);
}
function sortmk(){
    let marks=data.sort((a,b)=>{
       if(a.marks< b.marks) return -1;
        else if(a.marks > b.marks) return 1;
        else return 0; 
    })
    data(marks);
}
function search(){
    let value=searchItem.value;
    if(value!= ""){
        if(value==first_name || value==last_name || value==email){
            
        }
    }
}