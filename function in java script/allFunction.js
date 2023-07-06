//define a function that can answer the role of a user
//admin full acess
//sub admin access to create/delete the course
//testprep with access to create/delete the test
//user consume all content
//other trial user
//input:getUserRole(name,role)

function getUsername(name,role){
    switch (role) {
        case "admin":
            return `${name} is all access`; 
            
            break;
            case "subadmin":
            return `${name} is all access to create all course`; 
            
            break;
            case "testprep":
            return `${name} is all access to create any test`; 
            
            break;
            case "user":
            return `${name} is all access to consume the content`; 
            
            break;
    
        default:
            return`just a trial user`;
            break;
    }
}
console.log(getUsername("kartik","user"));
//store the function value in a varriable
var result=getUsername("kmr","admin");
console.log(result);
parseInt(a);
