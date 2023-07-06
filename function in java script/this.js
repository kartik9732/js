console.log(this);//{}empty scope
var game="cricket";
function P() {
    var p=1;
    console.log(this);
}
p(); //lot of confution here
