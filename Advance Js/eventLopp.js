const unp=() =>{
    console.log("i am one");

};

const dos=() =>{
    console.log("i am two");

};

const tres=() =>{
    console.log("i am three");

};

unp();
dos();
tres();

//synchronous function
const one=() =>{
    console.log("i am one");

};

const two=() =>{
    setTimeout(()=>{
console.log("wooohoo");
    },3000);
    console.log("i am two");

};

const three=() =>{
    console.log("i am three");

};

one();
two();
three();
