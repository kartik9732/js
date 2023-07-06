const names=["youtube","google","firefox","whatsApp","chrome"]
//for of loop work on array
for(const n of names){
    console.log(n);
}

//for in 
//bassically for in loop use for object
//we can access the key and the value both 
const Symbols={
    yt:"youtube",
    c:"chrome",
    g:"google",
    lco:"learn code online"
}

//for in loop
for(const n in Symbols){
    //console.log(n);     //return the key
    console.log(Symbols[n]);    // return the value
    //but we use 
    console.log(`the key is:${n} and the value is:${Symbols[n]}`);
}