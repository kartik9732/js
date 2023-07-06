//aro function

var isEven=(element)=>{
    //return element %2===0;
    element %2===0;
}
console.log(isEven(2));
//callback every 
//goes alle element in array and check what requirment
var result=[2,4,12,8].every(isEven);
console.log(result);
//its not true
var result = [2, 3, 6, 8].every((e) => (e % 2 === 0));
console.log(result);
//here the {}mean return anything in arrow function


