var user={
    firstName:"kartik",
    lastName:"manna",
    role:"user",
    logInCount:"32",
    facebookSingnedIn:true,
    //empty object name
    courseList:[],
    //using methods inside the object
    buyCourse:function(courseName){
        //to use current element in the object
        this.courseList.push(couseName);

    },
    //new method
getCourseCount:function(){
    return`${this.firstName} is enrolled in total of ${this.courseList.length} couse`;
},

};

//there is another same varriable name
var courseList=true;
console.log(user.firstname);
// call the method
console.log(user.getCourseCount());
//add the course
user.buyCourse("REACT js");
console.log(user.getCourseCount());
