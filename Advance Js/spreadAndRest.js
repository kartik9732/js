//...args (this is rest and spread operator)
var returnValue=Math.max(2,33,5,2,5,9);
console.log(returnValue);   //where the single value return
var myObj={} //here the object is empty
Object.assign(myObj,{a:1,b:2,c:3},{z:9,x:7},{d:5,g:9});
console.log(myObj);// return the complex value



//spread operator
function sum(a,b){
    return a+b;
}
var myA=[5,4];
//console.log(sum(5,4)); //9
console.log(sum(myA)); //5,4 undefined
console.log(sum(...myA)); //9
//take a group and try to spread to multiple value

//rest operataor
function sumA(...args){
    //in case may be araay will come up
    let sum=0;
    for(const arg of args){
        sum+=arg;
    }
    return sum;
}
console.log(sumA(2,3)); //5
console.log(sumA(2,3,5,5,2,6,91,43));


//first two is multiply and next other is sum
function sumA(a,b,...args){
    //in case may be araay will come up
    console.log(args); //[ 5, 5, 2, 6, 91, 43 ]
    let multiply=a*b;
    let sum=0;
    for(const arg of args){
        sum+=arg;
    }
    return [sum,multiply]; //[ 152, 6 ]
}

console.log(sumA(2,3,5,5,2,6,91,43));


