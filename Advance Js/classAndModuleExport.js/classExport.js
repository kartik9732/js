class user{
    constructor(name,email){
        //constructor
        this.name=name;
        this.email=email;
    }
    courseList=[];
    getInfo(){
        return{name:this.name,email:this.email};
    }
    enrollCourse(name){
        this.courseList.push(name);
        //add the course in courseList
    }
    getCourseList(){
        return this.courseList;
    }
}
//export the class
module.exports= User;
//export kore User er modhe store kor6i

//privet props getter and setter
const rock=new User("kmr","mannaK095@gmail.com");
console.log(rock.getInfo());
rock.enrollCourse("node js","express");
console.log(rock.getCourseList());
console.log(rock.courseList); //direct call when we use #courseList it show undefined

