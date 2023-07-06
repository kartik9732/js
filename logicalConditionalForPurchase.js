//you are allow to log in when you purchase the course
//log in email;
//log in password
//card in
//if any one is missing ,stop purchase;
/*var isLoggedIn=false;
 var isEmailVerified=true;
 var cardInfo=true;
 if(isLoggedIn){
     console.log("logged in succeed");
     if(isEmailVerified){
         console.log("your email is verified");
        if(cardInfo){
             console.log("you are eligible to purchase this course");
         }
     }

 }*/
///////////there is no result cause the first  question is false
// var isLoggedIn=true;
//  var isEmailVerified=true;
//  var cardInfo=false;
//  if(isLoggedIn){
//      console.log("logged in succeed");
//      if(isEmailVerified){
//          console.log("your email is verified");
//         if(cardInfo){
//              console.log("you are eligible to purchase this course");
//          }
//      }

//  } 


//one line code like && || operator
var isLoggedIn=true;
 var isEmailVerified=true;
 var cardInfo=true;
 if(isLoggedIn && isEmailVerified && cardInfo ){
    console.log("you can purchase this course");
 }
 else{
    console.log("you are not eligible to purchase this course");
 }