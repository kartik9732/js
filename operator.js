var num1=9;
var num2=10;
console.log(num1+num2);
console.log(num1*num2);
console.log(num1<num2);
//how to calculate discount percentage
//D=(L-S)/L*100;
var sellingPrice=199;
var listingPrice=799;
var discountPercent=((listingPrice-sellingPrice)/listingPrice)*100;
console.log("Discount percentage is:"+ discountPercent);
//to show in round figure
displayDiscountPercent=Math.round(discountPercent);
console.log(displayDiscountPercent);
//to check the data type
var result=listingPrice>sellingPrice;
console.log(typeof result);

 



