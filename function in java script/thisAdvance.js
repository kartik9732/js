//console.log(this);      //{} return the empty value
//but browser it say window;
var user={
    firstName:"kartik",
    courseCount:4,
    //method
    getCourseCount:function(){
        console.log("line 7",this);
    }
}
user.getCourseCount();