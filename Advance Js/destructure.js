// const user=["kartik",3,"learner"];
// // var name=user[0];
// // var role=user[2];
// //short from also like
// var[name,courseCount,role]=user;
// console.log(courseCount);

// //besically destructuring the data happend in object

const myUser={
    firstName:"kartik",
    courseCount:3,
    role:"learner",
};
console.log(myUser.role);   // for big code 
const {name,courseCount,role}=myUser;
console.log(courseCount);
