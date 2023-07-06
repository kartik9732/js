//user are allow to log in if they
//logged in through google
//logged in through Facebook
//logged in through Gmail
// it means not all only one thing is true code is run
//or(||) operator
var google=false;
var Facebook=true;
var Gmail=false;
if(google || Facebook || Gmail){
    console.log("log in success ");

}
else{
    console.log("log in through right way");
}