var counter=document.querySelector(".counter")
var account=document.querySelector(".account")

// counter.innerHTML=1001;
// //direct update

//use setTime interval and time out
let  count=1;
setInterval(() => {
    if(count<1000){

    
    count++;
    counter.innerText=count;
    }
},10)
//1000, 100,10

//set time out meaning aii time er por update hobe
setTimeout(() =>{
    account.innerText="this all my account";
},3000);


