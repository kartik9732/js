var user=function(name,courseName){
    this.name=name;
   this.courseName=courseName;
   this.getCourseName=function(){
       console.log(`coureseName is:${this.courseName}`);
   }
}
//i am not enter the main function i just inject or enter value through proto
//like 
user.prototype.getname=function(){
    console.log(`your  name is:${this.name} `);
}

//use new key word in object
var print=new user("kartik","javaScript");
print.getCourseName();
//using proto

//better code using hasownProperty
//check then print
if(print.hasOwnProperty("name")){
    print.getname();
}


//its not a regualr funtion call 
//its a constructor


//next unique property create
var result=new user("manna","react");
result.getCourseName();
//using proto
if(result.hasOwnProperty("namee")){
    result.getname(); 
}

