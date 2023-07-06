bigtripper("200"); //last tai function call hobe age na 
var bigtripper=function(a){ //this code could not run cause var bigtripper is a varriable do not declaire before 
    var bill=parseInt(a);// convert string into int
    console.log(bill+5);

}
//bigtripper("200");


console.log(name);
var name="kartik"       //global context
function sayName(){
    var name="KMR";
    console.log(name);
}
console.log(name);
