var testArray=[2,4,6,8,1,3,9,45];
console.log(testArray.fill(0));
console.log(testArray.fill("h"));
//fill function use for fill the element
console.log(testArray.fill("h", 2)); //2 4 h h h h h h
//here 2 nd is the start possition 
//and 1 st what i want
console.log(testArray.fill("h", 2,5));//2 4 h h h h 3 9 45
//start is inclusive but the end is exclusive


//filter function use 
const myNumber=[34,67,85,42,21,55,94];
// const result=myNumber.filter((num)=>(num!=55));
const result=myNumber.filter((num)=>(num>55));

//const result=myNumber.filter((num)=>(num=55));
//const result=myNumber.filter((num)=>(num<55));
console.log(result);



