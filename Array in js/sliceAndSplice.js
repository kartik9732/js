//start mean inclusive
//end mean exclusive
var user=["kartik","kmr","manna","sam","karan","virat"];
console.log(user.slice(1,4));
console.log(user.slice(1));

//splice
console.log(user.splice(1,2,"HI"));
                // start index ,count from start,remove this and add the value
    user.splice(1,3,"hii");
    console.log(user);//kartik hii kran virat
    user.splice(1,3,"hii","bye");
    console.log(user);
                