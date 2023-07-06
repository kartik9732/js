const unp=() =>{
    return "i am one";

};

const dos=  () =>{
    return new Promise((resolve,reject)=>{
        //like a object create the promise
        setTimeout(() => {
            resolve("i am two");
         },3000);
    });
    
};


const tres=() =>{
    return "i am three"

};

const callMe=async() => { //add async
    let valOne=unp();
    console.log(valOne);

    let valTwo= await dos();    //add await
    console.log(valTwo);

    let valThree=tres();
    console.log(valThree);
}

callMe();

