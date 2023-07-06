var cities=["kolkata","mumbai","channai","hydrabad","delhi"];
var country=new Array("india","us","canada");
console.log(cities[0]);
console.log(country.length);
//replace the value
cities[0]="panjab";
console.log(cities);
//multiple data
var user=["kartik","kartik721140","kmr",67,1,true];
console.log(user);
//pop function 
//remove the last element
user.pop();
console.log(user);
user.pop();
console.log(user);
//shift and unshift
user.unshift("Kmr9732");
console.log(user);
//unshift
user.shift();
console.log(user);

//index of 
console.log(user.indexOf(67));

//String to array
console.log(Array.form('kartik'));