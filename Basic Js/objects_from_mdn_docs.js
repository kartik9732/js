//create object
var user={
    name:"", //if we give any name it show this otherwise show empty{}
    getuserName:function(){
        console.log(`user name is:${this.name}`);
    },

    
};
//create the object
var kartik=Object.create(user);
console.log(kartik); //return the empty value;
//assign te value
kartik.name="kartik manna";
kartik.getuserName();