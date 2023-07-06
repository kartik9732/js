// //for loop
// for(let i=0;i<10;i++){
//     console.log(i);
// }


myStates=[
    "west Bengal",
    "bihar",
    "delhi",
    "rajashthan",
    1947,
    "himachal",
    "jummu",
    "kasmir",
]
//lopp
for(let i=0;i<myStates.length;i++){
    console.log(myStates[i]);
}

// using continue condition
for(let i=0;i<myStates.length;i++){
    if( typeof myStates[i]!=="string") continue;
    
    console.log(myStates[i]);
}

//break
for(let i=0;i<myStates.length;i++){
    if( typeof myStates[i]!=="string") break;
    
    console.log(myStates[i]);
}