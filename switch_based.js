//create an application with following roles
//admin ---gets full access
// sub admin --gets access to create /delete course
//testprep--gets access to create /delete test
//user --gets access to consume the content
var user="subAdmin";
switch (user) {
    case "admin":
        console.log("get full acess");
        
        break;
        case "subAdmin":
        console.log("get access to create or delete the course");

        
        break;
        case "testprep":
        console.log("get  access to creat or delete the test");
        
        break;
        case "user":
        console.log("get acess to consume the test");
        
        break;

    default:
        console.log("user not exit");
        break;
}
