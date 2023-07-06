const unp=() =>{
    return "i am one";

};

 const dos=  () =>{  //async here
     setTimeout(() =>{
        return "i am two"
     },3000);
 };


const tres=() =>{
    return "i am three"

};

const callMe=async() => { //cut async and await
    let valOne=unp();
    console.log(valOne);
    let valTwo= await dos();
    console.log(valTwo);
    let valThree=tres();
    console.log(valThree);
}

callMe();

