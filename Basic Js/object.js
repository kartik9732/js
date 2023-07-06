var user=function(name,courseName){
     this.name=name;
    this.courseName=courseName;
    this.getCourseCount=function(){
        console.log(`coureseName is:${this.courseName}`);
    }
}

//use new key word in object
var print=new user("kartik","javaScript");
console.log(print);

//its not a regualr function call 
//its a constructor


//next unique property create
var result=new user("manna","react");
console.log(result);