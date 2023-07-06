var myMap=new Map();
myMap.set(0,"Kartik");
//first is key and seconed is value

myMap.set(1,"manna");
myMap.set(2,"Kmr");
myMap.set(3,"Chitkara");
myMap.set(4,"cu");
console.log(myMap);

//grab value from the map
//for of loop

for(let key of myMap.keys()){
    console.log(`key is ${key}`)
}
//if i want the value
for(let value of myMap.values()){
    console.log(`value is ${value}`);
}

//if we want both value and key

for(let [key,value] of myMap){
    console.log(`key is ${key} and value is ${value}`);
}

//foeeach loop
myMap.forEach((key)=>console.log(`${key}`));
//return the value not the key ,key like index in forEach loop
myMap.forEach((v,k)=>console.log(`value is ${v} and the key is = ${k}`));
//value and key in both in same time
myMap.delete(2);
console.log(myMap);




