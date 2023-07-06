var p="kartik";
console.log("line nu 2",p);

function sayName(){
    //var p="KMR"; //own scope
    console.log("line nu 6",p); //it can use Kartik
}

sayTwoName();


function sayTwoName(){
    //var p="Mr manna"; //own scope
    console.log("line nu 12",p); //it can use Kartik
}

sayName();
